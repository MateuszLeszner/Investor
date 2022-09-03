import { v4 as uuidv4 } from 'uuid';

export abstract class DbEntity {
    public id?: string;

    constructor() {
        this.id = uuidv4();
    }

    public equals(e1: DbEntity, e2: DbEntity): boolean {
        return e1.id == e2.id
    }
}
