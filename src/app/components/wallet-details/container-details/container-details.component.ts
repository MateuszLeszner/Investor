import { Component, Input, OnInit } from '@angular/core';
import { AssetsContainer } from 'src/app/models/assets-container';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: '[app-container-details]',
  templateUrl: './container-details.component.html',
  styleUrls: ['./container-details.component.less']
})
export class ContainerDetailsComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  @Input()
  public container!: AssetsContainer;

  public areDetailsVisible: boolean = true;

  public isNewAssetVisible: boolean = false;

  constructor(
    private walletsService: WalletsService
  ) { }

  ngOnInit(): void {
  }

  public saveWallet(): void {
    this.walletsService.update(this.wallet);
  }

  public deleteContainer(containerId: string): void {
    if (!containerId) {
      return;
    }

    console.log(`Removing container ${containerId} from wallet ${this.wallet.name}`);
    this.wallet.assetsContainers = this.wallet.assetsContainers.filter(item => item.id !== containerId);
    this.saveWallet();
  }
}
