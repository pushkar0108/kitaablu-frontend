// #region Global Imports
import * as React from "react";
import { NextPage, GetServerSideProps } from "next";
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { Http } from '../../src/Services/API/Http';
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import {
    Container,
    Top,
    TopText,
    Middle,
    MiddleLeft,
    MiddleLeftButtons,
    MiddleRight,
    Apod,
    ApodButton,
} from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Heading, LocaleButton, Layout } from "@Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
    cinData,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    if (!cinData) {
        return (
            <Layout>
                <div>NO DATA PRESENT FOR CIN</div>
            </Layout>
        );
    }

    const details = JSON.parse(cinData.data);
    const refData = [
        {
            title: "CIN",
            value: details["CIN"]
        },
        {
            title: "Company Name",
            value: details["Company Name"]
        },
        {
            title: "ROC Code",
            value: details["ROC Code"]
        },
        {
            title: "Registration Number",
            value: details["Registration Number"]
        },
        {
            title: "Company Category",
            value: details["Company Category"]
        },
        {
            title: "Company SubCategory",
            value: details["Company SubCategory"]
        },
        {
            title: "Class of Company",
            value: details["Class of Company"]
        },
        {
            title: "Authorised Capital(Rs)",
            value: details["Authorised Capital(Rs)"]
        },
        {
            title: "Paid up Capital(Rs)",
            value: details["Paid up Capital(Rs)"]
        },
        {
            title: "Number of Members(Applicable in case of company without Share Capital)",
            value: details["Number of Members(Applicable in case of company without Share Capital)"]
        },
        {
            title: "Date of Incorporation",
            value: details["Date of Incorporation"]
        },
        {
            title: "Registered Address",
            value: details["Registered Address"]
        },
        {
            title: "Address",
            value: details["Address other than R/o where all or any books of account and papers are maintained"]
        },
        {
            title: "Email Id",
            value: details["Email Id"]
        },
        {
            title: "Whether Listed or not",
            value: details["Whether Listed or not"]
        },
        {
            title: "Suspended at stock exchange",
            value: details["Suspended at stock exchange"]
        },
        {
            title: "Date of last AGM",
            value: details["Date of last AGM"]
        },
        {
            title: "Date of Balance Sheet",
            value: details["Date of Balance Sheet"]
        },
        {
            title: "Company Status(for efiling)",
            value: details["Company Status(for efiling)"]
        }
    ];

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    return (
        <Layout>
            <h1 className="my-4">
                <small>{details["CIN"]}</small>
                <div>{details["Company Name"]}</div>
            </h1>
            <div className="card mb-4">
                <div className="card-body">
                    <table className="table table-hover">
                        <tbody>
                            {
                                refData.map(data => {
                                    return (
                                        <tr key={data.title}>
                                            <th scope="row">{data.title}</th>
                                            <td>{data.value}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card mb-4">
                <h2 className="card-header">Directors</h2>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr className="text-semibold text-fiord-blue">
                                <th scope="col">#</th>
                                <th scope="col">DIN/PAN</th>
                                <th scope="col">Name</th>
                                <th scope="col">Begin date</th>
                                <th scope="col">End date</th>
                                <th scope="col">Surrendered DIN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.dins.map((director, index) => {
                                    return (
                                        <tr key={`director_${director[0]}`} className="text-semibold text-reagent-gray">
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link href="/director/[din]" as={`/director/${director[0]}`}>
                                                    <a>{director[0]}</a>
                                                </Link>
                                            </td>
                                            <td>{director[6]}</td>
                                            <td>{director[7]}</td>
                                            <td>{director[8]}</td>
                                            <td>{director[6]}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card mb-4">
                <h2 className="card-header">Charges</h2>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead className="bg-light">
                            <tr className="text-semibold text-fiord-blue">
                                <th scope="col" className="border-0">#</th>
                                <th scope="col" className="border-0">Assets under charge</th>
                                <th scope="col" className="border-0">Charge Amount</th>
                                <th scope="col" className="border-0">Date of Creation</th>
                                <th scope="col" className="border-0">Date of Modification</th>
                                <th scope="col" className="border-0">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.charges.map((charge, index) => {
                                    return (
                                        <tr key={`charge_${charge[1]}`} className="text-semibold text-reagent-gray">
                                            <td>{index + 1}</td>
                                            <td>{charge[0]}</td>
                                            <td>{charge[1]}</td>
                                            <td>{charge[2]}</td>
                                            <td>{charge[3]}</td>
                                            <td>{charge[4]}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    const { cin } = ctx.query;

    let cinData;
    try {
        cinData = await Http.Request('GET', `http://3.7.5.125:4000/v1/company/${cin}`);
    } catch (error) {
        console.log("Error while fetching cin details for cin: ", cin, error);
        cinData = null;
    }


    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return {
        namespacesRequired: ["common"],
        cinData
    };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const cinData = await Http.Request('GET', `http://3.7.5.125:4000/v1/company/U55209AP2018PTC107672`);
//     console.log("cinData on server side: ", cinData);
//     return {
//       props: {
//         cinData,
//         name: "pushkar"
//       }
//     }
// }


const Extended = withTranslation("common")(Home);


export default Extended;
