import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-assets-buy-sell',
  templateUrl: './assets-buy-sell.component.html'
})
export class AssetsBuySellComponent implements OnInit {
  @Input()
  public asset!: Asset;

  @Input()
  public wallet!: Wallet;

  @Input()
  public isBuyVisible: boolean = false;

  @Input()
  public isSellVisible: boolean = false;

  public count: number = 0;
  public unitPrice: number = 0;
  public totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.unitPrice = this.asset.currentValuePerUnit;
  }

  buy() {

  }
}
