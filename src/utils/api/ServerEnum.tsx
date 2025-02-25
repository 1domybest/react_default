export enum ApiEnums {
    BASE = '/',
    TOKEN_TEST = '/tokenTest',
    TOKEN_REFRESH = '/token-refresh',
    POST_JOIN = '/join',
    POST_LOGIN = '/login',
    SNS_LOGIN = '/snsLogin',
};


export enum HeaderKeys {
    Authorization = "authorization",
    Access = "access",
    Refresh = "refresh",
}

export const ServerConstants = {
    SERVER_URL: import.meta.env.VITE_API_URL
} as const;

export enum HTTP_METHOD{
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
};

export enum TOKEN_EXPIRES {
    access = 1000 * 60 * 10, // 10분
};

