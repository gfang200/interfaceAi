"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClientWrapper = void 0;
const api_1 = require("./api");
const config_1 = require("./config");
const configuration_1 = require("./configuration");
class ApiClientWrapper {
    constructor() {
        const baseUrl = config_1.config[process.env.NODE_ENV || "development"];
        const configuration = new configuration_1.Configuration({ basePath: baseUrl });
        this.defaultApi = new api_1.DefaultApi(configuration);
    }
    async helloWorld() {
        return this.defaultApi.getHello();
    }
}
exports.ApiClientWrapper = ApiClientWrapper;
//# sourceMappingURL=apiClientWrapper.js.map