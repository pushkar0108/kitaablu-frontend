// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { LocaleButton, Layout } from "@Components";

import { IHomePage, ReduxNextPageContext } from "@Interfaces";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
    cinData,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();


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
                <small>Top Directors</small>
            </h1>
            <div className="card mb-4">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr className="text-semibold text-fiord-blue">
                                <th scope="col">DIN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/08008293">
                                        <a>08008293</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/08008293">
                                        <a>08008293</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/08008293">
                                        <a>08008293</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/08008293">
                                        <a>08008293</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/08008293">
                                        <a>08008293</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/08008293">
                                        <a>08008293</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/08008293">
                                        <a>08008293</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/02888316">
                                        <a>02888316</a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="text-semibold text-reagent-gray">
                                <td>
                                    <Link href="/director/[din]" as="/director/06365134">
                                        <a>06365134</a>
                                    </Link>
                                </td>
                            </tr>
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
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return {
        namespacesRequired: ["common"],
    };
};

const Extended = withTranslation("common")(Home);
export default Extended;
