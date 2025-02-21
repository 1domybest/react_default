interface ImportMetaEnv {
    readonly ENV: string; // react_blue or react_green
    readonly API_URL: string; // react_blue or react_green
    readonly PORT: number; // react_blue or react_green
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}