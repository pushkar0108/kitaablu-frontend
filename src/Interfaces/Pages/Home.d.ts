// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace IHomePage {
    export interface IProps extends WithTranslation {
        cinData?: any;
        data?: any;
        similarCompanies?: any;
        similarData?: any;
        name?: any;
    }

    export interface InitialProps {
        namespacesRequired?: string[];
        data?: any;
        cinData?: any;
        similarCompanies?: any;
        similarData?: any;
        name?: any;
    }

    export interface IStateProps {
        home: {
            version: number;
        };
        image: {
            url: string;
        };
    }

    namespace Actions {
        export interface IMapPayload {}

        export interface IMapResponse {}

        export interface IGetApodPayload extends PlanetaryModel.GetApodPayload {
            params: {};
        }

        export interface IGetApodResponse
            extends PlanetaryModel.GetApodResponse {}
    }
}

export { IHomePage };
