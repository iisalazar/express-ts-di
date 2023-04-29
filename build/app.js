"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
require("reflect-metadata");
class App {
    constructor() {
        this.port = +(process.env.PORT || 3000);
        this.app = (0, express_1.default)();
        this.registerRoutes();
    }
    getApp() {
        return this.app;
    }
    registerRoutes() {
        this.app.use(routes_1.router);
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`Server running on :${this.port}`);
        });
    }
}
exports.App = App;
