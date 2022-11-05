import express from "express";
import { router } from "./routes";
import "reflect-metadata";

export class App {
  private app: express.Application;
  private port: number = +(process.env.PORT || 3000);

  constructor() {
    this.app = express();
    this.registerRoutes();
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
