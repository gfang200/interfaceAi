import { DefaultApi } from "./api"; // Import the generated Api classes you need.
import { config } from "./config"; // Import the configuration file.
import { Configuration } from "./configuration";

export class ApiClientWrapper {
    private defaultApi: DefaultApi;

    constructor() {
        const baseUrl = config[process.env.NODE_ENV || "development"]; // Define the base URL from the config file.
        const configuration = new Configuration({ basePath: baseUrl });
        this.defaultApi = new DefaultApi(configuration);
    }

    // Define wrapper methods which call the methods on your Api classes.

    async helloWorld() {
        return this.defaultApi.getHello();
    }

    // Similarly add other methods that call the methods on your Api classes.
}
