"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devProxy = {
    "/api": {
        target: "https://api.nasa.gov",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
    },
};
exports.default = devProxy;
