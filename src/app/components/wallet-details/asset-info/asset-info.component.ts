import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { AssetsContainer } from 'src/app/models/assets-container';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: '[app-asset-info]',
  templateUrl: './asset-info.component.html',
  styleUrls: ['./asset-info.component.less']
})
export class AssetInfoComponent implements OnInit {
  @Input()
  public asset!: Asset;

  @Input()
  public wallet!: Wallet;

  @Input()
  public container?: AssetsContainer;

  @Input()
  public inner: boolean = false;

  constructor(
    private walletsService: WalletsService
  ) { }

  ngOnInit(): void {
  }

  public saveWallet(): void {
    this.walletsService.update(this.wallet);
  }

  public deleteAsset(assetId: string): void {
    if (!assetId) {
      return;
    }

    if (this.container) {
      console.log(`Removing asset ${assetId} from container ${this.container.name}`);
      this.container.assets = this.container.assets.filter(item => item.id !== assetId);
    }
    else {
      console.log(`Removing asset ${assetId} from wallet ${this.wallet.name}`);
      this.wallet.assets = this.wallet.assets.filter(item => item.id !== assetId);
    }

    this.saveWallet();
  }
}