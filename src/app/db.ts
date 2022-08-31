import Dexie, { Table } from 'dexie';
import { Wallet } from './models/wallet';

export class AppDB extends Dexie {
  wallets!: Table<Wallet, number>;

  constructor() {
    super('inwestycje-db');
    this.version(1).stores({
      wallets: '++id',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await db.wallets.bulkAdd([
      {name: 'Poduszka bezpieczeństwa'},
      {name: 'Portfel długoterminowy'},
      {name: 'Portfel ofensywny'}
    ]);
  }
}

export const db = new AppDB();