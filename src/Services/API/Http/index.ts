// #region Global Imports
import "isomorphic-unfetch";
import getConfig from "next/config";
import { stringify } from "query-string";
import { isServer } from '../Helper';
// #endregion Global Imports

// #region Interface Imports
import { HttpModel } from "@Interfaces";
// #endregion Interface Imports

const {
    publicRuntimeConfig: { API_KEY, API_URL },
} = getConfig();

const BASE_URL_CONFIG = {
    PRODUCTION: {
        server: "http://localhost:4000/api/",
        client: "https://kitaablu.com/api/"
    },
    DEVELOPMENT: {
        server: "https://kitaablu.com/api/",
        client: "https://kitaablu.com/api/"
    }
};

const getBaseUrl = () => {
    let env = process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : "DEVELOPMENT";
    let config = BASE_URL_CONFIG[env];
    return isServer() ? config.server : config.client;
};

export const Http = {
    Request: async <A>(
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload
    ): Promise<A> => {
        return new Promise((resolve, reject) => {
            const query = params
                ? `?${stringify({ ...params, api_key: API_KEY })}`
                : "";

            fetch(`${getBaseUrl()}${url}${query}`, {
                body: JSON.stringify(payload),
                cache: "no-cache",
                headers: {
                    "content-type": "application/json",
                },
                method: `${methodType}`,
            })
                .then(async response => {
                    if (response.status === 200) {
                        return response.json().then(resolve);
                    }
                    return reject(response);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
};
