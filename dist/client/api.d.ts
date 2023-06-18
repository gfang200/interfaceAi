import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import type { RequestArgs } from './base';
import { BaseAPI } from './base';
export declare const DefaultApiAxiosParamCreator: (configuration?: Configuration) => {
    getHello: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DefaultApiFp: (configuration?: Configuration) => {
    getHello(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const DefaultApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getHello(options?: any): AxiosPromise<void>;
};
export declare class DefaultApi extends BaseAPI {
    getHello(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void>>;
}
