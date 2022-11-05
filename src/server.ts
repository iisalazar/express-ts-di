import { App } from "./app";
import { dataSource } from "./data-source";
function bootstrap() {
  dataSource
    .initialize()
    .then(() => {
      console.log("Successfully connected to database");
      const app = new App();
      app.run();
    })
    .catch((err) => console.error(`Error connecting to database: ${err}`));
}

bootstrap();
