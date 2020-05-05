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
import { IDirectorPage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IDirectorPage.IProps, IDirectorPage.InitialProps> = ({
    t,
    i18n,
    dinData,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    const refData = [
        {
            title: "DIN",
            value: dinData["DIN"]
        },
        {
            title: "Name",
            value: dinData["name"]
        },
        {
            title: "Date of birth",
            value: dinData["dob"]
        },
        {
            title: "Father Name",
            value: '*********'
        },
        {
            title: "Mobile",
            value: '*********'
        },
        {
            title: "Phone",
            value: '*********'
        },
        {
            title: "Email",
            value: '*********'
        },
        {
            title: "Address",
            value: '*********'
        },
        {
            title: "City",
            value: dinData["city"]
        },
        {
            title: "Gender",
            value: dinData["gender"]
        }
    ];

    // remove later

    if(!dinData.companies) {
        dinData.companies = [
            ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"],
            ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"],
            ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"]
        ];
    }

    if(!dinData.llps) {
        dinData.llps = [
            ["AAG-4536", "ACCORD FINANCIAL SERVICES LLP", "25/05/2016", "-"]
        ];
    }

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
                <small>{dinData["DIN"]}</small>
                <div>{dinData["name"]}</div>
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
                <h2 className="card-header">List Of Companies</h2>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr className="text-semibold text-fiord-blue">
                                <th scope="col">#</th>
                                <th scope="col">CIN/FCRN</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Begin date</th>
                                <th scope="col">End date</th>
                                <th scope="col">Active compliance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dinData.companies.map((company, index) => {
                                    return (
                                        <tr key={`director_${company[0]}`} className="text-semibold text-reagent-gray">
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link href="/company/[cin]" as={`/company/${company[0]}`}>
                                                    <a>{company[0]}</a>
                                                </Link>
                                            </td>
                                            <td>{company[1]}</td>
                                            <td>{company[2]}</td>
                                            <td>{company[3]}</td>
                                            <td>{company[4]}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card mb-4">
                <h2 className="card-header">List Of LLP</h2>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead className="bg-light">
                            <tr className="text-semibold text-fiord-blue">
                                <th scope="col" className="border-0">#</th>
                                <th scope="col" className="border-0">LLPIN/FLLPIN</th>
                                <th scope="col" className="border-0">LLP Name</th>
                                <th scope="col" className="border-0">Begin date</th>
                                <th scope="col" className="border-0">End date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dinData.llps.map((llp, index) => {
                                    return (
                                        <tr key={`charge_${llp[1]}`} className="text-semibold text-reagent-gray">
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link href="/company/[cin]" as={`/company/${llp[0]}`}>
                                                    <a>{llp[0]}</a>
                                                </Link>
                                            </td>
                                            <td>{llp[1]}</td>
                                            <td>{llp[2]}</td>
                                            <td>{llp[3]}</td>
                                            <td>{llp[4]}</td>
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
): Promise<IDirectorPage.InitialProps> => {
    const { din } = ctx.query;
    const dinData = await Http.Request('GET', `http://3.7.5.125:4000/v1/director/${din}`);

    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return {
        namespacesRequired: ["common"],
        dinData,
    };
};


const Extended = withTranslation("common")(Home);
export default Extended;
