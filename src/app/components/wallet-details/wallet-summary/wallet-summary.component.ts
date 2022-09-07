import { Component, Input, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: '[app-wallet-summary]',
  templateUrl: './wallet-summary.component.html',
  styleUrls: ['./wallet-summary.component.less']
})
export class WalletSummaryComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  constructor() { }

  ngOnInit(): void {
  }

}
