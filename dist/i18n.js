"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// #region Global Imports
const next_i18next_1 = __importDefault(require("next-i18next"));
// #endregion Global Imports
const NextI18NextInstance = new next_i18next_1.default({
    defaultLanguage: "en",
    otherLanguages: ["es", "tr"],
});
exports.appWithTranslation = NextI18NextInstance.appWithTranslation, exports.withTranslation = NextI18NextInstance.withTranslation;
exports.default = NextI18NextInstance;
