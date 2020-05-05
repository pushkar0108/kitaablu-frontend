// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace ICompanyPage {
    export interface IProps extends WithTranslation {
        dinData?: any;
        name?: any;
    }

    export interface InitialProps {
        namespacesRequired?: string[];
        cinData?: any;
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

export { ICompanyPage };
