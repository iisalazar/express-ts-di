"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDataSource = void 0;
const db_1 = require("../config/db");
exports.testDataSource = (0, db_1.createDataSource)({
    name: "test",
    database: "test",
    username: "test",
    password: "test",
    port: 3307,
});
