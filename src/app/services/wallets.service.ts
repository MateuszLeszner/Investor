import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../db';
import { Wallet } from '../models/wallet';
import { AssetsService } from './assets.service';
import { DbService } from './db-service';

@Injectable({
  providedIn: 'root'
})
export class WalletsService implements DbService {
  public wallets$ = liveQuery(() => db.wallets.toArray());

  constructor(
    private assetsService: AssetsService
  ) { }

  public async getById(id: string): Promise<Wallet | undefined> {
    return await db.wallets.get(id);
  }

  public async getAll(): Promise<Wallet[]> {
    return await db.wallets.toArray()
  }

  public async add(wallet: Wallet): Promise<Wallet | undefined> {
    const id = await db.wallets.add(wallet);
    return await this.getById(id);
  }

  public async delete(id: string): Promise<void> {
    return db.transaction('rw', db.wallets, db.assets, async () => {
      await this.assetsService.deleteByWalletId(id);
      return await db.wallets.delete(id);
    });
  }

  public async update(wallet: Wallet): Promise<Wallet | undefined> {
    await db.wallets.update(wallet.id!, wallet);
    return await this.getById(wallet.id!);
  }
}
