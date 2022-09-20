import { Component, Input, OnInit } from '@angular/core';
import { AssetsContainer } from 'src/app/models/assets-container';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: '[app-assets-table]',
  templateUrl: './assets-table.component.html'
})
export class AssetsTableComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  constructor() { }

  ngOnInit(): void {
  }

  public createAssetsContainer(): void {
    this.wallet.assetsContainers.push(new AssetsContainer(''));
  }
}
