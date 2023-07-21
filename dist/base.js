"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OpenAI API
 * APIs for sampling from and fine-tuning language models
 *
 * The version of the OpenAPI document: 1.3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;
const axios_1 = require("axios");
// export const BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "")
exports.BASE_PATH = process.env.MARTIAN_TESTING_ENV
    ? 'http://127.0.0.1:8000/openai/v1'
    : 'https://route.withmartian.com/api/openai/v1';
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ',',
    ssv: ' ',
    tsv: '\t',
    pipes: '|',
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = exports.BASE_PATH, axios = axios_1.default) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = 'RequiredError';
    }
}
exports.RequiredError = RequiredError;