import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./di-container";
import "reflect-metadata";
export class App {
  private app: express.Application;
  private port: number = +(process.env.PORT || 3000);

  constructor() {
    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {
      app.use(express.json());
    });

    this.app = server.build();
  }

  public getApp(): express.Application {
    return this.app;
  }

  public run() {
    this.app.listen(this.port, () => {
      console.log(`Server running on :${this.port}`);
    });
  }
}
