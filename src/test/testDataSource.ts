import { createDataSource } from "@/config/db";

export const testDataSource = createDataSource({
  name: "test",
  database: "test",
  username: "test",
  password: "test",
  port: 3307,
});
