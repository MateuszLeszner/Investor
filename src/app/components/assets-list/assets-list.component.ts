import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.less']
})
export class AssetsListComponent implements OnInit {
  @Input()
  assets?: Asset[];

  @Input()
  walletCurrency!: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
