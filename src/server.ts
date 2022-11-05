import { App } from "./app";
import { appDataSource } from "./data-source";
function bootstrap() {
  appDataSource
    .initialize()
    .then(() => {
      console.log("Successfully connected to database");
      const app = new App();
      app.run();
    })
    .catch((err) => console.error(`Error connecting to database: ${err}`));
}

bootstrap();
