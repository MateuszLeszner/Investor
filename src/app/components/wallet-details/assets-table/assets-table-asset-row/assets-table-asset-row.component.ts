import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: '[app-assets-table-asset-row]',
  templateUrl: './assets-table-asset-row.component.html'
})
export class AssetsTableAssetRowComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  @Input()
  public asset!: Asset;
  
  public isBuyVisible: boolean = false;
  public isSellVisible: boolean = false;

  constructor(
    private walletsService: WalletsService
  ) { }

  ngOnInit(): void {
  }

  public saveWallet(): void {
    this.walletsService.update(this.wallet);
  }

  public deleteAsset(): void {
    if (confirm(`Czy na pewno usunąć ${this.asset.name}`)) {
      this.wallet.assetsContainers.forEach(assetsContainer => {
        assetsContainer.assets = assetsContainer.assets.filter(x => x.id !== this.asset.id);
      });
      this.saveWallet();
    }
  }
}
