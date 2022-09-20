import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(
    private walletsService: WalletsService
  ) { }

  ngOnInit(): void {
  }

  public downloadBackup(): void {
    this.walletsService.downloadBackup();
  }

  public uploadBackup(event: any): void {
    if (confirm('Załadowanie kopii bazy danych zastąpi aktualne portfele. Czy chcesz kontynuować?')) {
      const file: File = event.target.files[0];
      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          console.log(e);
          if (fileReader.result) {
            const wallets: Wallet[] = JSON.parse(fileReader.result.toString());
            wallets.forEach(wallet => {
              wallet.assets = [];
              this.walletsService.getById(wallet.id!)
                .subscribe(existingWallet => {
                  if (existingWallet) {
                    this.walletsService.update(wallet);
                  }
                  else {
                    this.walletsService.add(wallet);
                  }
                });
            });
          }
        }
        fileReader.readAsText(file);
      }
    }
  }
}
