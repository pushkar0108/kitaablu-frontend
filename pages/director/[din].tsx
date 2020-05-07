// #region Global Imports
import * as React from "react";
import { NextPage, GetServerSideProps } from "next";
import Link from 'next/link';
import { NextSeo } from 'next-seo';
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

    const directorName = dinData["name"];
    const SEO = {
        title: `${dinData["name"]}, ${dinData["DIN"]} - Company, charges, directors, CIN, DIN and contact details _ Kitaablu`,
        description: `Company information, business information, directors/partners details and director/partners contact information of ${directorName}, ${dinData["DIN"]}`
    };

    return (
        <Layout>
            <NextSeo
                title={SEO.title}
                description={SEO.description}
            />
            <h1 className="my-4">
                <small>{dinData["DIN"]}</small>
                <div>{directorName}</div>
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
                    {
                        dinData.companies.length ? (
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
                                                <tr key={`director_${company.CIN}`} className="text-semibold text-reagent-gray">
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link href="/company/[cin]" as={`/company/${company.CIN}`}>
                                                            <a>{company.CIN}</a>
                                                        </Link>
                                                    </td>
                                                    <td>{company.name}</td>
                                                    <td>{company.beginDate}</td>
                                                    <td>{company.endDate}</td>
                                                    <td>{company.status}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        ) :
                        <div>
                            No Companies mapped to the director
                        </div>
                    }
                </div>
            </div>
            <div className="card mb-4">
                <h2 className="card-header">List Of LLP</h2>
                <div className="card-body">
                    {
                        dinData.llps.length ? (
                            <table className="table table-hover">
                                <thead className="bg-light">
                                    <tr className="text-semibold text-fiord-blue">
                                        <th scope="col" className="border-0">#</th>
                                        <th scope="col" className="border-0">LLPIN/FLLPIN</th>
                                        <th scope="col" className="border-0">LLP Name</th>
                                        <th scope="col" className="border-0">Begin date</th>
                                        <th scope="col" className="border-0">End date</th>
                                        <th scope="col" className="border-0">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dinData.llps.map((llp, index) => {
                                            return (
                                                <tr key={`charge_${llp.CIN}`} className="text-semibold text-reagent-gray">
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link href="/company/[cin]" as={`/company/${llp.CIN}`}>
                                                            <a>{llp.CIN}</a>
                                                        </Link>
                                                    </td>
                                                    <td>{llp.name}</td>
                                                    <td>{llp.beginDate}</td>
                                                    <td>{llp.endDate}</td>
                                                    <td>{llp.status}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        ) :
                        <div>
                            No LLPs mapped to the director
                        </div>
                    }
                </div>
            </div>
        </Layout>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IDirectorPage.InitialProps> => {
    const { din } = ctx.query;
    const dinData = await Http.Request('GET', `api/v1/director/${din}`);

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
