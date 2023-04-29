"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataSource = void 0;
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("../modules/todo/todo.entity");
function createDataSource(overrideConfig) {
    let options = {
        type: "mysql",
        synchronize: true,
        logging: false,
        dropSchema: false,
        entities: [todo_entity_1.Todo],
    };
    const env = process.env.NODE_ENV || "development";
    if (env === "production")
        Object.assign(options, { url: process.env.MYSQL_CONNECT_URL });
    else
        Object.assign(options, {
            host: process.env.MYSQL_HOST || "localhost",
            username: process.env.MYSQL_USERNAME || "dev",
            password: process.env.MYSQL_PASSWORD || "dev",
            database: process.env.MYSQL_DATABASE || "dev",
            port: +(process.env.MYSQL_PORT || 3306),
        });
    if (overrideConfig) {
        Object.assign(options, Object.assign({}, overrideConfig));
    }
    return new typeorm_1.DataSource(options);
}
exports.createDataSource = createDataSource;
