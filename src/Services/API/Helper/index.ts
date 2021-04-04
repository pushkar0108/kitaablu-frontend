// #region Global Imports
import "isomorphic-unfetch";

export const isServer = () => {
    return typeof window === 'undefined';
};
