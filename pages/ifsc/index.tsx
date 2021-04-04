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
                <small>IFSC</small>
            </h1>

            <div>
                Find details of any bank using the IFSC code. 
            </div>
            <div>
                Try the search box on the right.
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
