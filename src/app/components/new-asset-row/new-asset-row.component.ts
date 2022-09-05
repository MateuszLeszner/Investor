import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Wallet } from 'src/app/models/wallet';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: '[app-new-asset-row]',
  templateUrl: './new-asset-row.component.html',
  styleUrls: ['./new-asset-row.component.less']
})
export class NewAssetRowComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  @Output()
  public onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('nameField') nameField: ElementRef | undefined;

  public asset!: Asset;

  constructor(
    private assetsService: AssetsService
  ) { }

  ngOnInit(): void {
    this.asset = new Asset('Podaj nazwę aktywa', this.wallet.id)
    setTimeout(() => {
      this.nameField?.nativeElement.focus();
      this.nameField?.nativeElement.setSelectionRange(0, this.nameField?.nativeElement.value.length);
    }, 1);
  }

  saveAsset(): void {
    this.assetsService.add(this.asset);
    this.onClose.emit(true);
  }

  close(): void {
    this.onClose.emit(false);
  }

}
