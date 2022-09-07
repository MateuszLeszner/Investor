import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { AssetsContainer } from 'src/app/models/assets-container';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: '[app-new-asset-row]',
  templateUrl: './new-asset-row.component.html',
  styleUrls: ['./new-asset-row.component.less']
})
export class NewAssetRowComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  @Input()
  public parent!: Wallet | AssetsContainer;

  @Output()
  public onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('nameField') nameField: ElementRef | undefined;

  public asset!: Asset;

  constructor(
    private walletsService: WalletsService
  ) { }

  ngOnInit(): void {
    this.asset = new Asset('Podaj nazwę aktywa')
    setTimeout(() => {
      this.nameField?.nativeElement.focus();
      this.nameField?.nativeElement.select();
    }, 1);
  }

  public saveAsset(): void {
    this.parent.assets.push(this.asset);
    this.walletsService.update(this.wallet);
    this.asset = new Asset('Podaj nazwę kolejnego aktywa');
    this.onClose.emit(true);
  }

  public close(): void {
    this.onClose.emit(false);
  }

  public keyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      this.saveAsset();
    }
    else if (event.code === 'Escape') {
      this.close();
    }
  }
}
