"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonPlaceholderRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const ServerEnum_tsx_1 = require("./ServerEnum.tsx");
exports.jsonPlaceholderRequest = axios_1.default.create({
    baseURL: ServerEnum_tsx_1.ServerConstants.SERVER_URL.toString(),
    withCredentials: true,
    timeout: 3000,
});
exports.jsonPlaceholderRequest.interceptors.request.use((config) => {
    console.log('호출 전 수행할 작업!', config.headers[ServerEnum_tsx_1.HeaderKeys.Authorization]);
    /*config.headers.Authorization = `Bearer ${localStorage.getItem(
                      'accessToken'
                    )}`;*/
    return config;
}, (error) => {
    console.log("에러발생", error.response);
    return Promise.reject(error);
});
exports.jsonPlaceholderRequest.interceptors.response.use((response) => {
    console.log("반환값", response);
    return response;
}, async (error) => {
    if (error.response.status === 401 && error.response.data === "need access token") {
        // 토큰이 필요한 순간에 토큰이 없음
        console.log("토큰발급이 필요합니다");
        // window.location.href = "/View1";  // 로그인 페이지로 리다이렉트 혹은 로그인 모달창 띄우기
    }
    return Promise.reject(error);
});
