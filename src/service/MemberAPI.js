"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.join = void 0;
const apiInterceptors_tsx_1 = require("../utils/api/apiInterceptors.tsx");
const ServerEnum_tsx_1 = require("../utils/api/ServerEnum.tsx");
const AuthAPI_tsx_1 = require("./AuthAPI.tsx");
// 가입하기
const join = async (request) => {
    try {
        const response = await (0, apiInterceptors_tsx_1.jsonPlaceholderRequest)({
            url: ServerEnum_tsx_1.ApiEnums.POST_JOIN,
            method: ServerEnum_tsx_1.HTTP_METHOD.POST,
            data: request
        });
        return response.status;
    }
    catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return 0;
    }
};
exports.join = join;
// 로그인
const login = async (request) => {
    try {
        delete apiInterceptors_tsx_1.jsonPlaceholderRequest.defaults.headers.common[ServerEnum_tsx_1.HeaderKeys.Authorization];
        const response = await (0, apiInterceptors_tsx_1.jsonPlaceholderRequest)({
            url: ServerEnum_tsx_1.ApiEnums.POST_LOGIN,
            method: ServerEnum_tsx_1.HTTP_METHOD.POST,
            data: request
        });
        // Bearer 접두사 제거
        apiInterceptors_tsx_1.jsonPlaceholderRequest.defaults.headers.common[ServerEnum_tsx_1.HeaderKeys.Authorization] = response.headers[ServerEnum_tsx_1.HeaderKeys.Authorization].substring(7);
        // 서버 토큰 (만료시간 - 1분) 전에 토큰 재발급
        setTimeout(AuthAPI_tsx_1.tokenRefresh, 10000);
        return response.status;
    }
    catch (error) {
        console.error("login 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return 0;
    }
};
exports.login = login;
