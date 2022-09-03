import Dexie, { Table } from 'dexie';
import { Asset } from './models/asset';
import { Wallet } from './models/wallet';

export class AppDB extends Dexie {
  wallets!: Table<Wallet, string>;
  assets!: Table<Asset, string>;

  constructor() {
    super('inwestycje-db');
    this.version(1).stores({
      wallets: 'id, name',
      assets: 'id, name, walletId'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const id = await db.wallets.add(new Wallet('Portfel przykładowy'));
    await db.assets.bulkAdd([
      new Asset('Gotówka', id),
      new Asset('Złoto', id),
      new Asset('BTC', id)
    ]);
  }
}

export const db = new AppDB();