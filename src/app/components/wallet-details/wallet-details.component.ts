import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Consts } from 'src/app/consts';
import { Asset } from 'src/app/models/asset';
import { Wallet } from 'src/app/models/wallet';
import { AssetsService } from 'src/app/services/assets.service';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.less']
})
export class WalletDetailsComponent implements OnInit, OnDestroy {
  public wallet?: Wallet;
  public isAssetsVisible: boolean = false;

  private subscription?: Subscription;
  private assetsSubscribtion?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private walletsService: WalletsService,
    private assetsService: AssetsService,
    public consts: Consts
    ) { }

  ngOnInit(): void {
    this.getWallet();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.assetsSubscribtion?.unsubscribe();
  }

  getWallet(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      const id = String(params["id"]);
      console.log(`Loading wallet ${id}`);
      this.walletsService.getById(id)
        .then(wallet => {
          if (wallet) {
            wallet.assets = this.assetsService.liveQueryToWalletAssets(id);
            //this.assetsSubscribtion = 
            wallet.assets.subscribe(assets => {
              console.log('incoming assets', assets);
              if (assets && assets.length > 0) {
                this.isAssetsVisible = true;
                wallet.totalMoneySpent = assets?.map(asset => asset.moneySpent).reduce((a, b) => Number(a) + Number(b), 0);
                wallet.currentTotalValue = assets?.map(asset => Asset.getCurrentTotalValue(asset)).reduce((a, b) => a + b);
                wallet.totalProfit = assets?.map(asset => Asset.getProfit(asset)).reduce((a, b) => Number(a) + Number(b), 0);
                wallet.totalPercentageProfit = wallet.totalProfit && wallet.totalMoneySpent ? wallet.totalProfit / wallet.totalMoneySpent : undefined;
              }
              else {
                this.isAssetsVisible = false;
              }
            });
          }
          this.wallet = wallet;
        })
        .catch(err => {
          console.log(err)
        });
    });
  }

  updateWallet(wallet: Wallet): void {
    this.walletsService.update(wallet);
  }
}
