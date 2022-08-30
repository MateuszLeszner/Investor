import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/db';

@Component({
  selector: 'app-wallets-list',
  templateUrl: './wallets-list.component.html',
  styleUrls: ['./wallets-list.component.less']
})
export class WalletsListComponent implements OnInit {
  wallets$ = liveQuery(() => db.wallets.toArray());

  constructor() { }

  ngOnInit(): void {
  }

}
