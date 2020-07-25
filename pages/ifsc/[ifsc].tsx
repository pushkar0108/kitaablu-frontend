// #region Global Imports
import React, { useEffect } from "react";
import MOMENT from "moment";
import _ from "lodash";
import { NextPage, GetServerSideProps } from "next";
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { Http } from '../../src/Services/API/Http';
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Layout, EntityUpdate } from "@Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    data,
    similarData = []
}) => {
    if (!data || !data[0]) {
        return (
            <Layout>
                <h1 className="my-4">
                    <div>NO DATA FOUND FOR IFSC.</div>
                </h1>
            </Layout>
        );
    }

    data = data[0];
    const refData = [
        {
            "title": "BRANCH",
            "value": data["branch"]
        },
        {
            "title": "IFSC",
            "value": data["ifsc"]
        },
        {
            "title": "MICR CODE",
            "value": data["micr"]
        },
        {
            "title": "CONTACT",
            "value": data["contact"]
        },
        {
            "title": "ADDRESS",
            "value": data["address"]
        },
        {
            "title": "STD CODE",
            "value": data["std_code"]
        },
        {
            "title": "CITY",
            "value": data["city"]
        },
        {
            "title": "DISTRICT",
            "value": data["district"]
        },
        {
            "title": "STATE",
            "value": data["state"]
        }
    ];

    const bankName = data["bank"];
    const SEO = {
        title: `${bankName}, ${data["branch"]}, ${data["city"]}, ${data["state"]}, ${data["ifsc"]} - IFSC Code, MICR Code and Full Address`,
        description: `${bankName}, ${data["branch"]}, ${data["city"]}, ${data["state"]}, IFSC Code: ${data["ifsc"]}, MICR Code: ${data["micr"]}, Address: ${data["address"]}. Find all Indian bank branches for NEFT, RTGS and ECS transactions.`
    };

    return (
        <Layout
            containerClass = "container-fluid"
            gridSize = {{
                left: 'col-md-2',
                mid: 'col-lg-7 col-md-8',
                right: 'col-lg-3 col-md-4'
            }}
            leftNav = {
                <div className="sticky-top" style={{ top: '100px' }}>
                    <EntityUpdate 
                        lastUpdatedAt = {data.updated_at}
                        entityType = "1"
                        entityId = {data["CIN"]}
                        hideUpdateButton = {true}
                    />
                </div>
            }
        >
            <NextSeo
                title={SEO.title}
                description={SEO.description}
            />
            <h1 className="my-4">
                <div>{bankName}</div>
                <small>IFSC - {data["ifsc"]}</small>
            </h1>
            
            <div className="card mb-4 shadow bg-white rounded" id="basicInfo">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                {
                                    refData.filter(data => data.value).map(data => {
                                        return (
                                            <tr key={data.title}>
                                                <td>{data.title}</td>
                                                <th scope="row">{data.value}</th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <small>
                Disclaimer - "All information provided in respect of IFSC Codes of Banks, contact numbers and other details are for information purposes only. Kitaablu, on best efforts basis, collates this information from relevant sources and endeavors to offer accurate and responsible data. Kitaablu is not responsible for any sort of discrepancies and shall not be responsible for any loss and/or damage that may arise or is incurred by use of such information. It is a mutual understanding that the visitor's usage of any such information will be at his own preference and risk."
                </small>
            </div>

            <h4 id="similarData" className="mt-2">List of nearby {data["bank"]} in {data["city"]}</h4>
            <div className="card mb-4 shadow bg-white rounded">
                <div className="card-body">
                    {
                        similarData.length ? (
                            <div className="table-responsive">
                                <table className="table table-hover table-sm">
                                    <thead>
                                        <tr className="text-semibold text-fiord-blue">
                                            <th scope="col">#</th>
                                            <th scope="col">Bank</th>
                                            <th scope="col">Branch</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            similarData.map((bank, index) => {
                                                return (
                                                    <tr key={`director_${bank.ifsc}`} className="text-semibold text-reagent-gray">
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <Link href="/ifsc/[ifsc]" as={`/ifsc/${bank.ifsc}`}>
                                                                <a>{bank.bank}</a>
                                                            </Link>
                                                        </td>
                                                        <td>{bank.branch}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        ) :
                        <div>
                            No Nearby Bank Available
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
    const { ifsc } = ctx.query;

    const props = {
        data: null,
        similarData: []
    };

    try {
        props.data = await Http.Request('GET', `https://kitaablu.com/api/v1/ifsc`, {
            ifsc
        });
        props.similarData = await Http.Request('GET', `https://kitaablu.com/api/v1/ifsc`, {
            city: _.get(props, 'data.0.city', undefined),
            bank: _.get(props, 'data.0.bank', undefined),
            limit: 100
        });
    } catch (error) {
        console.log("Error while fetching data for ifsc: ", ifsc, error);
    }

    return props;
};

const Extended = withTranslation("common")(Home);
export default Extended;
