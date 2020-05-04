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
import { Heading, LocaleButton } from "@Components";
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
        <Container>
            <Top>
                <img src="/images/pankod-logo.png" alt="Pankod Logo" />
            </Top>
            <Middle>
                <MiddleLeft>
                    <MiddleLeftButtons>
                        {renderLocaleButtons(i18n.language)}
                    </MiddleLeftButtons>
                </MiddleLeft>
                <MiddleRight>
                    <TopText>{t("common:Hello")}</TopText>
                    <Heading text={t("common:World")} />
                    <Link href="/company/[cin]" as="/company/U55209DL2018PTC329158">
                        <a>U55209DL2018PTC329158</a>
                    </Link>
                    <Link href="/company/[cin]" as="/company/U55209DL2018PTC329275">
                        <a>U55209DL2018PTC329275</a>
                    </Link>
                    <Link href="/company/[cin]" as="/company/U55209DL2018PTC329769">
                        <a>U55209DL2018PTC329769</a>
                    </Link>
                    <Apod>
                        <ApodButton
                            onClick={() => {
                                dispatch(
                                    HomeActions.GetApod({
                                        params: { hd: false },
                                    })
                                );
                            }}
                        >
                            Discover pushkar's Space {cinData.company_name}
                        </ApodButton>
                        <img
                            src={home.image.url}
                            height="300"
                            width="150"
                            alt="Discover Space"
                        />
                    </Apod>
                </MiddleRight>
            </Middle>
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    const { cin } = ctx.query;
    const cinData = await Http.Request('GET', `http://3.7.5.125:4000/v1/company/${cin}`);
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { 
        namespacesRequired: ["common"],
        cinData,
        name: "pushkar"
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
