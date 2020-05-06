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
                    <p className="card-text">
                        We are provider of commercial information and insight on businesses. The team have one goal - to be your sole resource for critical information. We gather data from a number of official sources and third parties to give you all the information you need, in one easy to use website.
                    </p>
                </div>
                {/* <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                </div> */}
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">We have authentic dataset</h2>
                    <p className="card-text">We have a continuously growing dataset with data of more than 20 Lakh companies and 45 Lakh directors.</p>
                </div>
                {/* <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                </div> */}
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">How well do you know your customers, suppliers or competitors ?</h2>
                    <p className="card-text">
                        When asked how well they know their competition, most business owners respond by naming direct competitors. Knowing your direct competitors is important, but it's not enough. Your direct competitors do not represent the entire competitive landscape facing your business, service or product. A myriad of other dangerous competitors are lurking out there. To succeed in the long term, you must identify, analyze, then differentiate from them.
                    </p>
                </div>
                {/* <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                </div> */}
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">
                        Get data in your required formats
                    </h2>
                    <p className="card-text">
                        Just mail us your requirements and we will provide you data in your required formats.
                    </p>
                </div>
                <div className="card-footer text-muted">
                    Email us at info@kitaablu.com
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
