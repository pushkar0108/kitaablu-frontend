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
                <div>Home</div>
            </h1>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">What we do?</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" className="btn btn-primary">Read More &rarr;</a>
                </div>
                <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                                <a href="#">Start Bootstrap</a>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">We have authentic data</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" className="btn btn-primary">Read More &rarr;</a>
                </div>
                <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                                <a href="#">Start Bootstrap</a>
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
