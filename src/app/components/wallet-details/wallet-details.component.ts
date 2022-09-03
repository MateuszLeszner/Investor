import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
  public wallet: Wallet | undefined;

  private subscription: Subscription | undefined;

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
  }

  getWallet(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      const id = String(params["id"]);
      console.log(`Loading wallet ${id}`);
      this.walletsService.getById(id)
        .then(wallet => {
          this.wallet = wallet;
          this.assetsService.getByWalletId(id)
            .toArray()
            .then(assets => {
              this.wallet!.assets = assets;
              console.log(this.wallet);
            })
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
