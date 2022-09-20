import { Component, Input, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: '[app-assets-table-footer]',
  templateUrl: './assets-table-footer.component.html'
})
export class AssetsTableFooterComponent implements OnInit {
  @Input()
  public wallet!: Wallet;
  
  constructor() { }

  ngOnInit(): void {
  }

}
