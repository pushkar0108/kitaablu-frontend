"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// #region Global Imports
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const middleware_1 = __importDefault(require("next-i18next/middleware"));
// #endregion Global Imports
// #region Local Imports
const i18n_1 = __importDefault(require("./i18n"));
const routes_1 = __importDefault(require("./routes"));
const proxy_1 = __importDefault(require("./proxy"));
// #endregion Local Imports
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next_1.default({ dev });
const handler = routes_1.default.getRequestHandler(app);
app.prepare().then(() => {
    const server = express_1.default();
    app.setAssetPrefix(process.env.STATIC_PATH);
    server.use(express_1.default.static(path_1.default.join(__dirname, "../public/static")));
    server.use(middleware_1.default(i18n_1.default));
    if (process.env.PROXY_MODE === "local") {
        // eslint-disable-next-line global-require
        const proxyMiddleware = require("http-proxy-middleware");
        Object.keys(proxy_1.default).forEach(context => {
            server.use(proxyMiddleware(context, proxy_1.default[context]));
        });
    }
    server.get("*", (req, res) => handler(req, res));
    server.listen(port);
    // eslint-disable-next-line no-console
    console.log(`> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV}`);
});
