import { DbEntity } from "../models/db-entity";

export interface DbService {
    getById(id: string): Promise<DbEntity | undefined>;

    getAll(): Promise<DbEntity[]>;

    add(entity: DbEntity): Promise<DbEntity | undefined>;

    delete(id: string): Promise<void>;

    update(entity: DbEntity): Promise<DbEntity | undefined>;
}
