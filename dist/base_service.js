"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.BaseService = void 0;
var axios_1 = __importDefault(require("axios"));
var modules_1 = require("./modules");
var form_data_1 = __importDefault(require("form-data"));
var BaseService = /** @class */ (function () {
    function BaseService(config) {
        this.config = config;
        this.client = axios_1["default"].create({
            baseURL: this.config.host + '/api/v1',
            auth: {
                username: this.config.accessKeyId,
                password: this.config.secretAccessKey
            }
        });
    }
    BaseService.prototype.getDefaultParams = function () {
        return {
            amount: 100
        };
    };
    BaseService.prototype.get = function (endpoint, params) {
        if (params === void 0) { params = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.get(endpoint, {
                        params: params
                    })
                        .then(function (res) { return res.data; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            console.log("error", error);
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype["delete"] = function (endpoint, body) {
        if (body === void 0) { body = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (body) {
                    return [2 /*return*/, this.client.request({
                            method: 'delete',
                            url: endpoint,
                            data: body
                        }).then(function (res) { return res.status < 300; })["catch"](function (err) {
                            var _a;
                            if (axios_1["default"].isAxiosError(err)) {
                                var error = err;
                                throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                            }
                            throw new modules_1.RequestError("request error", 400);
                        })];
                }
                return [2 /*return*/, this.client["delete"](endpoint)
                        .then(function (res) { return res.status < 300; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.deleteWithParams = function (endpoint, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client["delete"](endpoint, {
                        params: params
                    })
                        .then(function (res) { return res.status < 300; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            console.log("error", error);
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.upload = function (endpoint, data, params) {
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                formData = new form_data_1["default"]();
                formData.append('content', data, params.path);
                return [2 /*return*/, this.client.post(endpoint, formData, {
                        params: params,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                        .then(function (res) { return res.data; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            console.log("error", error);
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.post = function (endpoint, params, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.post(endpoint, data, {
                        params: params
                    })
                        .then(function (res) { return res.data; })];
            });
        });
    };
    BaseService.prototype.postNoParams = function (endpoint, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.post(endpoint, data)
                        .then(function (res) { return res.data; })];
            });
        });
    };
    BaseService.prototype.postBoolean = function (endpoint, params, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.post(endpoint, data, {
                        params: params
                    })
                        .then(function (res) { return res.status < 300; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.put = function (endpoint, params, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.put(endpoint, data, {
                        params: params
                    })
                        .then(function (res) { return res.data; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.putBoolean = function (endpoint, params, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.put(endpoint, data, {
                        params: params
                    })
                        .then(function (res) { return res.status < 300; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.patch = function (endpoint, params, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.patch(endpoint, data, {
                        params: params
                    })
                        .then(function (res) { return res.data; })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.head = function (endpoint, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.head(endpoint, {
                        params: params
                    })
                        .then(function (res) {
                        var shortInfo = {
                            size: res.headers['content-length'] ? parseInt(res.headers['content-length']) : 0,
                            range: res.headers['content-range'] ? res.headers['content-range'] : '',
                            last_modified: res.headers['Last-Modified'] ? new Date(res.headers['Last-Modified']) : new Date(),
                            tags: res.headers['ETag'] ? res.headers['ETag'] : ''
                        };
                        return shortInfo;
                    })["catch"](function (err) {
                        var _a;
                        if (axios_1["default"].isAxiosError(err)) {
                            var error = err;
                            console.log("error", error);
                            throw new modules_1.RequestError(error.message, error.status, (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
                        }
                        throw new modules_1.RequestError("request error", 400);
                    })];
            });
        });
    };
    BaseService.prototype.getEndpoint = function (endpoint) {
        switch (endpoint) {
            case modules_1.ApiEndpoint.Config:
                return '/config';
            case modules_1.ApiEndpoint.Setup:
                return '/setup_lakefs';
            case modules_1.ApiEndpoint.Auth:
                return '/auth';
            case modules_1.ApiEndpoint.Objects:
                return "/repositories/".concat(this.config.repository, "/refs/").concat(this.config.branch, "/objects");
            case modules_1.ApiEndpoint.Repositories:
                return "/repositories";
            default:
                return '';
        }
    };
    return BaseService;
}());
exports.BaseService = BaseService;
