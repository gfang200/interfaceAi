"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApi = exports.DefaultApiFactory = exports.DefaultApiFp = exports.DefaultApiAxiosParamCreator = void 0;
const axios_1 = require("axios");
const common_1 = require("./common");
const base_1 = require("./base");
const DefaultApiAxiosParamCreator = function (configuration) {
    return {
        getHello: async (options = {}) => {
            const localVarPath = `/hello`;
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.DefaultApiAxiosParamCreator = DefaultApiAxiosParamCreator;
const DefaultApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.DefaultApiAxiosParamCreator)(configuration);
    return {
        async getHello(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHello(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.DefaultApiFp = DefaultApiFp;
const DefaultApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.DefaultApiFp)(configuration);
    return {
        getHello(options) {
            return localVarFp.getHello(options).then((request) => request(axios, basePath));
        },
    };
};
exports.DefaultApiFactory = DefaultApiFactory;
class DefaultApi extends base_1.BaseAPI {
    getHello(options) {
        return (0, exports.DefaultApiFp)(this.configuration).getHello(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.DefaultApi = DefaultApi;
//# sourceMappingURL=api.js.map