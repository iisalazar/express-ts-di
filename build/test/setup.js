"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { testDataSource } from "../data-source";
const mockConnection_1 = require("./mockConnection");
const testDataSource_1 = require("./testDataSource");
let connection;
/**
 * Establish conneciton w/ the test database before starting tests
 */
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    if (!connection) {
        connection = new mockConnection_1.MockConnection(testDataSource_1.testDataSource);
        yield connection.open();
        return Promise.resolve();
    }
}));
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    if (connection) {
        yield connection.clear();
    }
}));
/**
 * Close connection w/ the database after running tests
 */
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connection.clear();
    yield connection.close();
}));
