import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Consts } from 'src/app/consts';
import { Wallet } from 'src/app/models/wallet';
import { UtilsService } from 'src/app/services/utils.service';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html'
})
export class WalletDetailsComponent implements OnInit, OnDestroy {
  public wallet?: Wallet;

  private subscription?: Subscription;

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
      this.walletsService.getById(id).subscribe(wallet => {
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
}
