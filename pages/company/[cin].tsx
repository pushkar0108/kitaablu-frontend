// #region Global Imports
import * as React from "react";
import _ from "lodash";
import { NextPage, GetServerSideProps } from "next";
import { NextSeo } from 'next-seo';
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
    similarCompanies = [],
}) => {
    if (!cinData) {
        return (
            <Layout>
                <h1 className="my-4">
                    <div>NO DATA FOUND FOR CIN.</div>
                </h1>
                <div>We will try to update the dataset with the given CIN</div>
                <div>Please try again later after sometime</div>
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
            title: "LLP Name",
            value: details["LLP Name"]
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
            title: "Number of Partners",
            value: details["Number of Partners"]
        },
        {
            title: "Number of Designated Partners",
            value: details["Number of Designated Partners"]
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
        },
        {
            title: "LLP Status",
            value: details["LLP Status"]
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
    
    const companyName = details["Company Name"] || details["LLP Name"];
    const SEO = {
        title: `${companyName}, ${details["CIN"]} - Company, charges, directors, CIN, DIN and contact details _ Kitaablu`,
        description: `Company information, business information, directors/partners details and director/partners contact information of ${companyName}, ${details["CIN"]}`
    };

    return (
        <Layout>
            <NextSeo
                title={SEO.title}
                description={SEO.description}
            />
            <h1 className="my-4">
                <small>{details["CIN"]}</small>
                <div>{companyName}</div>
            </h1>
            <h4>
                Quick Links - 
                <a href="#basicInfo" className="badge badge-secondary ml-1">Basic Info</a>
                <a href="#directors" className="badge badge-dark ml-1">Directors</a>
                <a href="#charges" className="badge badge-danger ml-1">Charges</a>
            </h4>
            <div className="card mb-4">
                <div className="card-body">
                    <div>
                        {companyName} is a {details["Class of Company"]} incorporated on {details["Date of Incorporation"]}. It is classified as {details["Company SubCategory"]} and is registered at Registrar of Companies, {details["ROC Code"]}. It's authorized share capital is INR {details["Authorised Capital(Rs)"]} and paid up capital is INR {details["Paid up Capital(Rs)"]}. It is a {details["Whether Listed or not"]} company. 
                    </div>
                    <div>
                        Corporate Identification Number(CIN) of {companyName} is {details["CIN"]} and it's registration number is {details["Registration Number"]}. Company can be contacted on email - {details["Email Id"]} and registered address - {details["Registered Address"]}. Current status of {companyName} is - {details["Company Status(for efiling)"] || details["LLP Status"]}.
                    </div>
                    <div>
                        Director details of {companyName} can be found <a href="#directors">Here</a>.
                    </div>
                </div>
            </div>
            <div className="card mb-4" id="basicInfo">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                {
                                    refData.filter(data => data.value).map(data => {
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
            </div>
            <div className="card mb-4" id="directors">
                <h2 className="card-header">Directors</h2>
                <div className="card-body">
                    <div className="table-responsive">
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
            </div>
            <div className="card mb-4" id="charges">
                <h2 className="card-header">Charges</h2>
                <div className="card-body">
                    <div className="table-responsive">
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
                                            <tr key={`charge_${charge[1]}_${index}`} className="text-semibold text-reagent-gray">
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
            </div>
            <div className="card mb-4">
                <h3 className="card-header">List of similar companies</h3>
                <div className="card-body">
                    {
                        similarCompanies.length ? (
                            <div className="table-responsive">
                                <table className="table table-hover table-sm">
                                    <thead>
                                        <tr className="text-semibold text-fiord-blue">
                                            <th scope="col">#</th>
                                            <th scope="col">CIN/FCRN</th>
                                            <th scope="col">Company Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            similarCompanies.map((company, index) => {
                                                return (
                                                    <tr key={`director_${company.CIN}`} className="text-semibold text-reagent-gray">
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <Link href="/company/[cin]" as={`/company/${company.CIN}`}>
                                                                <a>{company.CIN}</a>
                                                            </Link>
                                                        </td>
                                                        <td>{company.company_name}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        ) :
                        <div>
                            No similar company registered
                        </div>
                    }
                </div>
            </div>
        </Layout>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    const { cin } = ctx.query;

    const props = {
        cinData: null,
        similarCompanies: []
    };

    try {
        props.cinData = await Http.Request('GET', `https://kitaablu.com/api/v1/company/${cin}`);
        props.similarCompanies = await Http.Request('GET', `https://kitaablu.com/api/v1/company`, {
            roc_code: _.get(props, 'cinData.roc_code', undefined),
            class: _.get(props, 'cinData.class', undefined),
            limit: 100
        });
    } catch (error) {
        console.log("Error while fetching details for cin: ", cin, error);
    }

    return props;
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
