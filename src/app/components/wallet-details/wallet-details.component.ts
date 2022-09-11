import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Consts } from 'src/app/consts';
import { Wallet } from 'src/app/models/wallet';
import { UtilsService } from 'src/app/services/utils.service';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.less']
})
export class WalletDetailsComponent implements OnInit, OnDestroy {
  public wallet?: Wallet;

  public isNewContainerVisible: boolean = false;

  private subscription?: Subscription;
  private newItemVisiblity: {containerId: string, visible: boolean}[] = [];
  private detailsVisibility: {containerId: string, visible: boolean}[] = [];

  constructor(
    private route: ActivatedRoute,
    private walletsService: WalletsService,
    private utilsService: UtilsService,
    public consts: Consts
    ) { }

  ngOnInit(): void {
    this.getWallet();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public getWallet(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      const id = String(params["id"]);
      this.walletsService.getById(id)
      .subscribe(wallet => {
        console.log(`Loading wallet ${id}`);
        this.wallet = wallet;
        if (wallet) {
          this.utilsService.fillWalletData(wallet);
        }
        console.log(wallet);
      });
    });
  }

  public updateWallet(wallet: Wallet): void {
    this.walletsService.update(wallet);
  }

  public showDetails(containerId: string, visible: boolean): void {
    const element = this.detailsVisibility.find(x => x.containerId === containerId);
    if (!element) {
      this.detailsVisibility.push({containerId: containerId, visible: visible});
    }
    else {
      element.visible = visible;
    }
  }

  public areDetailsVisible(containerId: string): boolean {
    const value = this.detailsVisibility.find(x => x.containerId === containerId)?.visible;
    if (value) {
      return true;
    }

    return false;
  }

  public showNewAsset(containerId: string, visible: boolean): void {
    const element = this.newItemVisiblity.find(x => x.containerId === containerId);
    if (!element) {
      this.newItemVisiblity.push({containerId: containerId, visible: visible});
    }
    else {
      element.visible = visible;
    }
  }

  public isNewAssetVisible(containerId: string): boolean {
    const value = this.newItemVisiblity.find(x => x.containerId === containerId)?.visible;
    if (value) {
      return true;
    }

    return false;
  }
}
