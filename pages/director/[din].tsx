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

    // remove later
    const details = JSON.parse(dinData.data);
    const refData = [
        {
            title: "DIN",
            value: details["DIN"]
        },
        {
            title: "Name",
            value: details["nameOfApplicant"]
        },
        {
            title: "Date of birth",
            value: details["dateOfBirth"]
        },
        {
            title: "Father Name",
            value: details["fatherName"]
        },
        {
            title: "Mobile",
            value: details["addMobile"]
        },
        {
            title: "Phone",
            value: details["addPhone"]
        },
        {
            title: "Email",
            value: details["addEmail"]
        },
        {
            title: "Address",
            value: details["permenantAddress"]
        },
        {
            title: "City",
            value: details["addCity"]
        },
        {
            title: "Gender",
            value: details["flag5"]
        }
    ];

    // remove later
    details.companies = [
        ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"],
        ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"],
        ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"]
    ];

    details.llps = [
        ["AAG-4536", "ACCORD FINANCIAL SERVICES LLP", "25/05/2016", "-"]
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
                <small>{details["DIN"]}</small>
                <div>{details["nameOfApplicant"]}</div>
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
                                details.companies.map((company, index) => {
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
                                details.llps.map((llp, index) => {
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
    // const dinData = await Http.Request('GET', `http://3.7.5.125:4000/v1/director/${din}`);
    const dinData = {
        data: JSON.stringify({ "flag": ["0"], "flag1": ["NO"], "flag2": [""], "flag3": [""], "flag4": [""], "flag5": ["Female"], "flag6": [""], "flag7": ["IN"], "flag8": [""], "flag9": [""], "state": [""], "addFax": [""], "margin": [""], "tcShip": [""], "addCity": ["NEW DELHI"], "country": [""], "dateOne": ["1800-01-01T00:00:00+05:30"], "dateSix": ["1800-01-01T00:00:00+05:30"], "dateTwo": ["1800-01-01T00:00:00+05:30"], "llpName": [""], "paddFax": [""], "tcOther": [""], "addEmail": ["tulika_agarwal@rediffmail.com"], "addPhone": ["98711400817"], "addState": ["DL"], "dateFive": ["1800-01-01T00:00:00+05:30"], "dateFour": ["1800-01-01T00:00:00+05:30"], "nameLast": ["AGARWAL"], "paddCity": ["NEW DELHI"], "statName": [""], "tcPatent": [""], "totalOne": [""], "totalTwo": [""], "addMobile": ["9811400817"], "cinStatus": [""], "dateThree": ["1800-01-01T00:00:00+05:30"], "nameFirst": ["TULIKA"], "nameOfLLP": [""], "paddEmail": [""], "paddLine1": ["A-60, GROUND FLOOR"], "paddLine2": [""], "paddPhone": [""], "paddState": ["DL"], "profitOne": [""], "profitTwo": [""], "regNumber": [""], "srnStatus": [""], "tcCOthers": [""], "totalFour": [""], "addCNTRYNM": [""], "addCountry": ["IN"], "addLineOne": ["A-60, GROUND FLOOR"], "addLineTwo": [""], "addPinCode": ["110024"], "categoryOP": [""], "cinCompany": [""], "fatherName": ["NARENDRA"], "isoCountry": [""], "llpAddress": [""], "occupation": [""], "paddMobile": [""], "propBusAct": [""], "regOFCName": [""], "tcGoodWill": [""], "totalThree": [""], "addDistrict": [""], "companyName": [""], "dateOfBirth": ["1975-07-10T00:00:00+05:30"], "designation": [""], "dpinStatusN": [""], "nationality": ["IN"], "otherPRTCLR": [""], "paddCntryNM": [""], "paddCountry": ["IN"], "paddPinCode": ["110024"], "presentAddr": ["A-60, GROUND FLOOR$LAJPAT NAGAR-II$NEW DELHI$Delhi$110024$India$"], "profitThree": [""], "satisfyDate": ["1800-01-01T00:00:00+05:30"], "tcBookdbets": [""], "tcCopyRight": [""], "amountCharge": ["0.0"], "categoryothr": [""], "chargeModArc": [""], "dynStringOne": ["LAJPAT NAGAR-II"], "dynStringTwo": ["LAJPAT NAGAR-II"], "extNTOPRCHRG": [""], "nameRegister": [""], "paddDistrict": [""], "propNTREGLLP": [""], "tcIntimmProp": [""], "tcTradeMarks": [""], "conSORTIUMFIN": [""], "dateINSCHRGCR": ["1800-01-01T00:00:00+05:30"], "dateINSCHRGMD": ["1800-01-01T00:00:00+05:30"], "dateINSCRTEVI": ["1800-01-01T00:00:00+05:30"], "dynStringFive": [""], "dynStringFour": ["AGARWAL"], "dynStringThre": ["KISHORE"], "firstLastName": ["NARENDRA KISHORE AGARWAL"], "nameOfPartner": [""], "rateOfIntrest": [""], "tcImmProperty": [""], "tcmovableProp": [""], "addCertificate": [""], "chargeOutSDIND": [""], "companyAddress": [""], "dateRECEIPTIND": ["1800-01-01T00:00:00+05:30"], "descriptionOne": [""], "descriptionTwo": [""], "instrumentDESC": [""], "jointChargeINV": [""], "noChargeHolder": [""], "presentAddress": [""], "prtCLRPROPCHRG": [""], "prtCLRPRSNTMOD": [""], "shortPRTPROPCH": [""], "termsRePayment": [""], "dateAcquisition": ["1800-01-01T00:00:00+05:30"], "nameOfApplicant": ["TULIKA AGARWAL"], "residentOfIndia": ["YES"], "chargeHolderAuth": [""], "nameChargeHolder": [""], "permenantAddress": ["A-60, GROUND FLOOR$LAJPAT NAGAR-II$NEW DELHI$Delhi$110024$India$"], "tcFloatingCharge": [""], "instrumentDESCTwo": [""], "changedDesignation": [""], "detailChargeFRGNCR": [""] })
    };

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
