import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Portfele';

  async ngOnInit(): Promise<void> {
    await this.addNewWallet('Portfel tymczasowy');
  }

  async addNewWallet(name: string): Promise<void> {
    await db.wallets.add({name: name});
  }
}
