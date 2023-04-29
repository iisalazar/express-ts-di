"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const db_1 = require("./config/db");
exports.appDataSource = (0, db_1.createDataSource)();
