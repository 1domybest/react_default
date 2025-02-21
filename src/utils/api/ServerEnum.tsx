export enum ApiEnums {
    BASE = '/api',
    TOKEN_TEST = ApiEnums.BASE + '/tokenTest',
    TOKEN_REFRESH = ApiEnums.BASE + '/token-refresh',
    POST_JOIN = ApiEnums.BASE + '/join',
    POST_LOGIN = ApiEnums.BASE + '/login',
    SNS_LOGIN = ApiEnums.BASE + '/snsLogin',
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

