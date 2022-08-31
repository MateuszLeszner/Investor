import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WalletsListComponent } from './components/wallets-list/wallets-list.component';
import { HeaderComponent } from './components/_shared/header/header.component';
import { SidebarComponent } from './components/_shared/sidebar/sidebar.component';
import { WalletsListItemComponent } from './components/wallets-list/wallets-list-item/wallets-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletsListComponent,
    HeaderComponent,
    SidebarComponent,
    WalletsListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
