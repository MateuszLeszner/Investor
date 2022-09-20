import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { AssetsContainer } from 'src/app/models/assets-container';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: '[app-assets-table-container]',
  templateUrl: './assets-table-container.component.html'
})
export class AssetsTableContainerComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  @Input()
  public assetsContainer!: AssetsContainer;

  constructor(
    private walletsService: WalletsService
  ) { }

  ngOnInit(): void {
  }

  public saveWallet(): void {
    this.walletsService.update(this.wallet);
  }

  public createAsset(): void {
    this.assetsContainer.assets.push(new Asset(''));
  }

  public deleteAssetsContainer(): void {
    if (confirm(`Czy na pewno usunąć ${this.assetsContainer.name}`)) {
      this.wallet.assetsContainers = this.wallet.assetsContainers.filter(x => x.id !== this.assetsContainer.id);
      this.saveWallet();
    }
  }
}
