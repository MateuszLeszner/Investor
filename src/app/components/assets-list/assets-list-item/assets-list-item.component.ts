import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Wallet } from 'src/app/models/wallet';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: '[app-assets-list-item]',
  templateUrl: './assets-list-item.component.html',
  styleUrls: ['./assets-list-item.component.less']
})
export class AssetsListItemComponent implements OnInit {
  @Input()
  asset!: Asset;

  @Input()
  wallet!: Wallet;

  constructor(
    private assetsService: AssetsService
  ) { }

  ngOnInit(): void {
  }

  updateAsset(asset: Asset): void {
    this.assetsService.update(asset);
  }
}
