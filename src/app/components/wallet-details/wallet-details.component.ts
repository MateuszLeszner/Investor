import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Wallet } from 'src/app/models/wallet';
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
    private walletsService: WalletsService
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
      const id = Number(params["id"]);
      console.log(`Loading wallet ${id}`);
      this.walletsService.getById(id)
        .then(wallet => {
          console.log(wallet);
          this.wallet = wallet
        })
        .catch(err => {
          console.log(err)
        });
    });
  }

}
