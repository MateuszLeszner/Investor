import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../db';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {
  public wallets$ = liveQuery(() => db.wallets.toArray());

  constructor() { }

  public async getById(id: number): Promise<Wallet | undefined> {
    return await db.wallets.where({id: id}).first();
  }

  public async getAll(): Promise<Wallet[]> {
    return await db.wallets.toArray()
  }

  public async add(name: string): Promise<Wallet | undefined> {
    const id = await db.wallets.add({ name: name });
    return await this.getById(id);
  }

  public async delete(id: number): Promise<void> {
    return await db.wallets.delete(id);
  }

  public async rename(id: number, newName: string): Promise<Wallet | undefined> {
    await db.wallets.update(id, {name: newName});
    return await this.getById(id);
  }
}
