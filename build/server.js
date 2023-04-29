"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const data_source_1 = require("./data-source");
function bootstrap() {
    data_source_1.appDataSource
        .initialize()
        .then(() => {
        console.log("Successfully connected to database");
        const app = new app_1.App();
        app.run();
    })
        .catch((err) => console.error(`Error connecting to database: ${err}`));
}
bootstrap();
