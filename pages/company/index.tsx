// #region Global Imports
import React, { useState } from 'react';
import { NextPage } from "next";
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { LocaleButton, Layout, AsyncTypeahead } from "@Components";
import { Http } from '../../src/Services/API/Http';

import { ICompanyPage, ReduxNextPageContext } from "@Interfaces";

const Home: NextPage<ICompanyPage.IProps, ICompanyPage.InitialProps> = ({
    t,
    i18n,
    bannerDetails = {
        counts: {
            1: 'NA',
            7: 'NA',
            30: 'NA'
        }
    },
    companies
}) => {

    const SEO = {
        title: `New company registered in India in last 24 hours or 1 day _ Kitaablu`,
        description: `Company information, business information, directors/partners details and director/partners contact information of companies registered in last 24 hours or 1 day`
    };

    return (
        <Layout>
            <NextSeo
                title={SEO.title}
                description={SEO.description}
            />
            <h1 className="my-4">
                <small>Number of Companies registered in last</small>
            </h1>

            <div className="card my-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h2>
                                        <small>1 Day - </small>{bannerDetails.counts['1']}
                                    </h2>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h2>
                                        <small>7 Days - </small>{bannerDetails.counts['7']}
                                    </h2>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h2>
                                        <small>30 Days - </small>{bannerDetails.counts['30']}
                                    </h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4 d-none d-sm-block d-md-none">
                <h3 className="card-header">Company Search</h3>
                <div className="card-body">
                    <AsyncTypeahead
                        type = 'company'
                        placeholder = "Search using company name ..."
                    />
                </div>
            </div>

            <div className="card mb-4">
                <h3 className="card-header">List of companies registered in last 24 hours</h3>
                <div className="card-body">
                    {
                        companies.length ? (
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr className="text-semibold text-fiord-blue">
                                            <th scope="col">#</th>
                                            <th scope="col">CIN/FCRN</th>
                                            <th scope="col">Company Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            companies.map((company, index) => {
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
                                No Company registered
                        </div>
                    }
                </div>
                {/* <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </Layout>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ICompanyPage.InitialProps> => {
    const { query } = ctx;
    const { doiDayDiff = 1 } = query;
    const response = {
        bannerDetails: undefined,
        companies: []
    };

    try {
        response.bannerDetails = await Http.Request('GET', `v1/company/banner`);
        response.companies = await Http.Request(
            'GET',
            `v1/company`,
            {
                doiDayDiff,
                limit: 100
            }
        );
    } catch (error) {
        console.log("Error while fetching props: ", error);
    }

    return response;
};

const Extended = withTranslation("common")(Home);
export default Extended;
