// import { testDataSource } from "@/data-source";
// import { MockConnection } from "./mockConnection";
// import { testDataSource } from "./testDataSource";

// let connection: MockConnection;

/**
 * Establish conneciton w/ the test database before starting tests
 */
// beforeAll(async () => {
//   if (!connection) {
//     connection = new MockConnection(testDataSource);
//     await connection.open();
//     return Promise.resolve();
//   }
// });

// afterEach(async () => {
//   if (connection) {
//     await connection.clear();
//   }
// });

// /**
//  * Close connection w/ the database after running tests
//  */
// afterAll(async () => {
//   await connection.clear();
//   await connection.close();
// });
