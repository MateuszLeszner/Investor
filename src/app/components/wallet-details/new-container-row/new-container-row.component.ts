import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AssetsContainer } from 'src/app/models/assets-container';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: '[app-new-container-row]',
  templateUrl: './new-container-row.component.html',
  styleUrls: ['./new-container-row.component.less']
})
export class NewContainerRowComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  @Output()
  public onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('nameField') nameField: ElementRef | undefined;

  public assetContainer!: AssetsContainer;

  constructor(
    private walletsService: WalletsService
  ) { }

  ngOnInit(): void {
    this.assetContainer = new AssetsContainer('Podaj nazwę grupy aktywów')
    setTimeout(() => {
      this.nameField?.nativeElement.focus();
      this.nameField?.nativeElement.select();
    }, 1);
  }

  public saveAssetContainer(): void {
    this.wallet.assetsContainers.push(this.assetContainer);
    this.walletsService.update(this.wallet);
    this.assetContainer = new AssetsContainer('Podaj nazwę kolejnej grupy aktywów');
    this.onClose.emit(true);
  }

  public close(): void {
    this.onClose.emit(false);
  }

  public keyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      this.saveAssetContainer();
    }
    else if (event.code === 'Escape') {
      this.close();
    }
  }
}
