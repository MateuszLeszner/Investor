import Dexie, { Table } from 'dexie';
import { Asset } from './models/asset';
import { Wallet } from './models/wallet';

export class AppDB extends Dexie {
  wallets!: Table<Wallet, string>;

  constructor() {
    super('inwestycje-db');
    this.version(1).stores({
      wallets: 'id, parentId, name'
      //assets: 'id, name, walletId, created'
    });
    this.on('populate', () => this.populate());
  }

  private async populate() {
    let wallet1 = new Wallet('Portfel przykładoy');
    let wallet1mainAssets: Asset[] = [];
    wallet1mainAssets.push(new Asset("Gotówka"));
    wallet1mainAssets.push(new Asset("Konta oszczędnościowe"));
    wallet1mainAssets.push(new Asset("Lokaty"));
    wallet1.assets = wallet1mainAssets;
    await db.wallets.add(wallet1);

    let wallet2 = new Wallet('Portfel walutowy');
    let wallet2mainAssets: Asset[] = [];
    wallet2mainAssets.push(new Asset("EUR"));
    wallet2mainAssets.push(new Asset("USD"));
    wallet2mainAssets.push(new Asset("GBP"));
    wallet2.assets = wallet2mainAssets;
    await db.wallets.add(wallet2);

    // const id = await db.wallets.add(new Wallet('Portfel przykładowy'));
    // await db.assets.bulkAdd([
    //   new Asset('Gotówka', id),
    //   new Asset('Złoto', id),
    //   new Asset('Obligacje', id)
    // ]);
    
    // const innerId1 = await db.wallets.add(new Wallet('Waluty', id));
    // await db.assets.bulkAdd([
    //   new Asset('EUR', innerId1),
    //   new Asset('USD', innerId1),
    //   new Asset('GBP', innerId1)
    // ]);

    // const innerId2 = await db.wallets.add(new Wallet('Kryptowaluty', id));
    // await db.assets.bulkAdd([
    //   new Asset('BTC', innerId2),
    //   new Asset('ETH', innerId2),
    // ]);
  }
}

export const db = new AppDB();