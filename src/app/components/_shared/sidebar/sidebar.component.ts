import { Component, OnInit } from '@angular/core';
import { WalletsService } from 'src/app/services/wallets.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
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

  public uploadBackup(): void {
    if (confirm('Załadowanie kopii bazy danych zastąpi aktualne portfele. Czy chcesz kontynuować?')) {
      console.log('confirmed');
    }
  }
}
