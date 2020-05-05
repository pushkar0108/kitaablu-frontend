"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #region Global Imports
const nextRoutes = require("next-routes");
// #endregion Global Imports
const routes = (module.exports = nextRoutes());
routes.add("home", "/");
exports.default = routes;
