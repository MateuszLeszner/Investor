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
  public wallet!: Wallet;

  public isNewAssetVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
