import { Injectable } from '@angular/core';
import { Collection, liveQuery, Observable } from 'dexie';
import { db } from '../db';
import { Asset } from '../models/asset';
import { DbService } from './db-service';

@Injectable({
  providedIn: 'root'
})
export class AssetsService implements DbService {
  //public assets$ = liveQuery(() => db.assets.toArray());

  constructor() { }

  public async getById(id: string): Promise<Asset | undefined> {
    console.debug(`Getting wallet id ${id}`);
    return await db.assets.get(id);
  }

  public async getAll(): Promise<Asset[]> {
    console.debug('Getting all wallets');
    return await db.assets.toArray()
  }

  public async add(asset: Asset): Promise<Asset | undefined> {
    console.debug(`Adding asset ${asset.name} to wallet ${asset.walletId}`);
    const id = await db.assets.add(asset);
    return await this.getById(id);
  }

  public async delete(id: string): Promise<void> {
    console.debug(`Deleting asset ${id}`);
    return await db.assets.delete(id);
  }

  public async update(asset: Asset): Promise<Asset | undefined> {
    console.debug('Updating asset', asset);
    await db.assets.update(asset.id!, asset);
    return await this.getById(asset.id!);
  }

  public getByWalletId(id: string): Collection<Asset, string> {
    console.debug(`Getting assets by wallet id ${id}`);
    return db.assets.where('walletId').equals(id);
  }

  public liveQueryToWalletAssets(walletId: string): Observable<Asset[]> {
    return liveQuery(() => this.getByWalletId(walletId).toArray());
  }

  public async deleteByWalletId(id: string): Promise<number> {
    console.debug(`Deleting assets from wallet ${id}`);
    return await this.getByWalletId(id).delete();
  }
}
