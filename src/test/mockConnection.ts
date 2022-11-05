import { DataSource } from "typeorm";

export class MockConnection {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async open(): Promise<DataSource> {
    this.dataSource = await this.dataSource.initialize();

    return Promise.resolve(this.dataSource);
  }

  async close() {
    await this.dataSource.destroy();
  }

  async clear() {
    const entities = this.dataSource.entityMetadatas;
    await Promise.all(
      entities.map((entity) => {
        const repository = this.dataSource.getRepository(entity.name);

        return repository.query(`DELETE FROM ${entity.tableName}`);
      })
    );
  }
}
