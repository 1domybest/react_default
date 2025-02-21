interface ImportMetaEnv {
    readonly VITE_ENV: string; // react_blue or react_green
    readonly VITE_API_URL: string; // react_blue or react_green
    readonly VITE_PORT: number; // react_blue or react_green
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}