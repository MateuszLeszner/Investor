import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from 'src/app/services/wallets.service';
import {FirebaseWalletsService} from "../../../services/firebase-wallets.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public isFirestoreUploadCompleted: boolean = false;

  constructor(
    private walletsService: WalletsService,
    private firebaseWalletsService: FirebaseWalletsService
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

  public uploadToFirestore(): void {
    const subscribtion = this.walletsService.wallets$.subscribe(wallets => {
      if (wallets) {
        wallets.forEach(wallet => {
          this.firebaseWalletsService.add(wallet)
            .then(() => {
              console.log(`Uploading wallet ${wallet.id} to firebase completed.`);
            })
            .catch(e => {
              console.log(`Uploading wallet ${wallet.id} to firebase failed:`, e);
            })
        });
        this.isFirestoreUploadCompleted = true;
        subscribtion.unsubscribe();
      }
    });
  }
}
