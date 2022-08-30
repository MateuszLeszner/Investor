import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WalletsListComponent } from './components/wallets-list/wallets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
