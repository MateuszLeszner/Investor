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

  @ViewChild('renameField') renameField: ElementRef | undefined;

  public isEditMode: boolean = false;

  constructor(private walletsService: WalletsService) { }

  ngOnInit(): void {
  }

  public deleteWallet(id: number): void {
    this.walletsService.delete(id);
  }

  public renameWallet(id: number, newName: string): void {
    this.walletsService.rename(id, newName);
    this.isEditMode = false;
  }

  public enableEditMode(): void {
    this.isEditMode = true;
    setTimeout(() => {
      this.renameField!.nativeElement.value = this.wallet.name;
      this.renameField!.nativeElement.focus();
    }, 1);
  }

  public disableEditMode(): void {
    this.isEditMode = false;
  }

  public renameFieldKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      this.renameWallet(this.wallet.id!, this.renameField?.nativeElement.value);
    }
    else if (event.code === 'Escape') {
      this.disableEditMode();
    }
  }
}
