import { Component, ElementRef, ViewChild } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-wallets-list',
  templateUrl: './wallets-list.component.html',
  styleUrls: ['./wallets-list.component.less']
})
export class WalletsListComponent {
  @ViewChild('newWalletField') newWalletField: ElementRef | undefined;

  isAddFieldVisible = false;

  constructor(public walletsService: WalletsService) { }

  public showAddField(): void {
    this.isAddFieldVisible = true;
    setTimeout(() => {
      this.newWalletField!.nativeElement.value = '';
      this.newWalletField!.nativeElement.focus();
    }, 1);
  }

  public addWallet(name: string): void {
    this.walletsService.add(new Wallet(name));
    this.isAddFieldVisible = false;
  }

  public cancelAddingWallet(): void {
    this.isAddFieldVisible = false;
  }

  public inputKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addWallet(this.newWalletField?.nativeElement.value);
    }
    else if (event.key === "Escape") {
      this.cancelAddingWallet();
    }
  }
}
