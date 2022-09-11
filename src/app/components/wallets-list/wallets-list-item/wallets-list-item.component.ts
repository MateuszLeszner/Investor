import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-wallets-list-item',
  templateUrl: './wallets-list-item.component.html',
  styleUrls: ['./wallets-list-item.component.less']
})
export class WalletsListItemComponent implements OnInit {
  @Input()
  public wallet!: Wallet;

  @ViewChild('renameField')
  private renameField: ElementRef | undefined;

  @ViewChild('sidebarMenu')
  private sidebar: ElementRef | undefined;

  public isEditMode: boolean = false;

  constructor(private walletsService: WalletsService) { }

  ngOnInit(): void {
  }

  public deleteWallet(walletId: string): void {
    this.walletsService.delete(walletId);
  }

  public updateWallet(wallet: Wallet): void {
    this.walletsService.update(wallet);
    this.isEditMode = false;
  }

  public enableEditMode(): void {
    this.isEditMode = true;
    setTimeout(() => {
      this.renameField!.nativeElement.value = this.wallet.name;
      this.renameField!.nativeElement.focus();
      this.renameField!.nativeElement.select();
    }, 1);
  }

  public disableEditMode(): void {
    this.isEditMode = false;
  }

  public renameFieldKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      this.wallet.name = this.renameField?.nativeElement.value;
      this.updateWallet(this.wallet);
    }
    else if (event.code === 'Escape') {
      this.disableEditMode();
    }
  }
}
