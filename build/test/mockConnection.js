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
exports.MockConnection = void 0;
class MockConnection {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dataSource = yield this.dataSource.initialize();
            return Promise.resolve(this.dataSource);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dataSource.destroy();
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            const entities = this.dataSource.entityMetadatas;
            yield Promise.all(entities.map((entity) => {
                const repository = this.dataSource.getRepository(entity.name);
                return repository.query(`DELETE FROM ${entity.tableName}`);
            }));
        });
    }
}
exports.MockConnection = MockConnection;
