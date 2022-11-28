import express from "express";
import { router } from "./routes";
import "reflect-metadata";
import morgan from "morgan";

export class App {
  private app: express.Application;
  private port: number = +(process.env.PORT || 3000);

  constructor() {
    this.app = express();
    this.configureServer();
    this.registerRoutes();
  }

  private configureServer() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  public getApp(): express.Application {
    return this.app;
  }

  private registerRoutes() {
    this.app.use(router);
  }

  public run() {
    this.app.listen(this.port, () => {
      console.log(`Server running on :${this.port}`);
    });
  }
}
