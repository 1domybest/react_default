"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_METHOD = exports.ServerConstants = exports.HeaderKeys = exports.ApiEnums = void 0;
var ApiEnums;
(function (ApiEnums) {
    ApiEnums["BASE"] = "/api";
    ApiEnums["TOKEN_TEST"] = "/api/tokenTest";
    ApiEnums["TOKEN_REFRESH"] = "/api/token-refresh";
    ApiEnums["POST_JOIN"] = "/api/join";
    ApiEnums["POST_LOGIN"] = "/api/login";
    ApiEnums["SNS_LOGIN"] = "/api/snsLogin";
})(ApiEnums || (exports.ApiEnums = ApiEnums = {}));
;
var HeaderKeys;
(function (HeaderKeys) {
    HeaderKeys["Authorization"] = "authorization";
    HeaderKeys["Access"] = "access";
    HeaderKeys["Refresh"] = "refresh";
})(HeaderKeys || (exports.HeaderKeys = HeaderKeys = {}));
exports.ServerConstants = {
    SERVER_URL: import.meta.env.VITE_API_URL
};
var HTTP_METHOD;
(function (HTTP_METHOD) {
    HTTP_METHOD["GET"] = "GET";
    HTTP_METHOD["POST"] = "POST";
    HTTP_METHOD["PUT"] = "PUT";
    HTTP_METHOD["PATCH"] = "PATCH";
    HTTP_METHOD["DELETE"] = "DELETE";
})(HTTP_METHOD || (exports.HTTP_METHOD = HTTP_METHOD = {}));
;
