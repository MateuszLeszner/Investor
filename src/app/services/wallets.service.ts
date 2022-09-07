import { Injectable } from '@angular/core';
import { liveQuery, Observable } from 'dexie';
import { db } from '../db';
import { Wallet } from '../models/wallet';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {
  public wallets$: Observable<Wallet[]> = liveQuery(() => db.wallets.toArray());

  constructor(
    private utils: UtilsService
  ) {
    this.wallets$.subscribe(wallets => {
      wallets.forEach(wallet => {
        this.utils.fillWalletData(wallet);
      });
    })
  }

  public getById(id: string): Observable<Wallet | undefined> {
    return liveQuery(() => db.wallets.get(id));
  }

  public async add(wallet: Wallet): Promise<string> {
    return await db.wallets.add(wallet);
  }

  public async delete(id: string): Promise<void> {
    return await db.wallets.delete(id);
  }

  public async update(wallet: Wallet): Promise<number> {
    return await db.wallets.update(wallet.id!, wallet);
  }
}
