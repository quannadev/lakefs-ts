"use strict";
exports.__esModule = true;
exports.ApiEndpoint = exports.RequestError = exports.getConfigFromEnv = void 0;
function getConfigFromEnv() {
    return {
        host: process.env.LAKEFS_HOST || "http://localhost:8000",
        accessKeyId: process.env.LAKEFS_ACCESS_KEY_ID || "lakefs_root",
        secretAccessKey: process.env.LAKEFS_ACCESS_KEY_ID || "lakefs_root",
        repository: process.env.LAKEFS_REPOSITORY || "test",
        branch: process.env.LAKEFS_BRANCH || "main"
    };
}
exports.getConfigFromEnv = getConfigFromEnv;
var RequestError = /** @class */ (function () {
    function RequestError(message, status, data) {
        if (status === void 0) { status = 400; }
        if (data === void 0) { data = null; }
        this.message = message;
        this.status = status;
        this.data = data;
    }
    return RequestError;
}());
exports.RequestError = RequestError;
var ApiEndpoint;
(function (ApiEndpoint) {
    /// Configs
    ApiEndpoint[ApiEndpoint["Config"] = 0] = "Config";
    ApiEndpoint[ApiEndpoint["Setup"] = 1] = "Setup";
    ApiEndpoint[ApiEndpoint["Auth"] = 2] = "Auth";
    /// Repositories
    ApiEndpoint[ApiEndpoint["Repositories"] = 3] = "Repositories";
    /// Objects
    ApiEndpoint[ApiEndpoint["Objects"] = 4] = "Objects";
})(ApiEndpoint = exports.ApiEndpoint || (exports.ApiEndpoint = {}));
