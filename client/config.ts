type Config = {
    [key: string]: string;
    development: string;
    production: string;
};
export const config: Config = {
    // development: "http://localhost:3001",
    development: "http://host.docker.internal:3001",
    production: "https://your-production-url.com",
};
