import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Wallet } from 'src/app/models/wallet';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.less']
})
export class AssetsListComponent implements OnInit {
  @Input()
  wallet!: Wallet;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public getTotalMoneySpent(): number | undefined {
    return this.wallet.assets?.map(asset => asset.moneySpent).reduce((a, b) => Number(a) + Number(b), 0);
  }

  public getTotalCurrentValue(): number | undefined {
    return this.wallet.assets?.map(asset => Asset.getCurrentTotalValue(asset)).reduce((a, b) => Number(a) + Number(b), 0);
  }

  public getTotalProfit(): number | undefined {
    return this.wallet.assets?.map(asset => Asset.getProfit(asset)).reduce((a, b) => Number(a) + Number(b), 0);
  }

  public getTotalPercentageProfit(): number | undefined {
    const totalProfit = this.getTotalProfit();
    const totalMoneySpent = this.getTotalMoneySpent();
    return totalProfit && totalMoneySpent ? totalProfit / totalMoneySpent : undefined;
  }
}
