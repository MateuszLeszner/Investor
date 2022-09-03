import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WalletsListComponent } from './components/wallets-list/wallets-list.component';
import { HeaderComponent } from './components/_shared/header/header.component';
import { SidebarComponent } from './components/_shared/sidebar/sidebar.component';
import { WalletsListItemComponent } from './components/wallets-list/wallets-list-item/wallets-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { WalletDetailsComponent } from './components/wallet-details/wallet-details.component';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { AssetsListItemComponent } from './components/assets-list/assets-list-item/assets-list-item.component';
import { AssetCurrentTotalValuePipe } from './pipes/asset-current-total-value.pipe';
import { AssetProfitPipe } from './pipes/asset-profit.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import localePL from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { NumberFieldComponent } from './components/basic/number-field/number-field.component';
import { CurrencyFieldComponent } from './components/basic/currency-field/currency-field.component';
import { TextFieldComponent } from './components/basic/text-field/text-field.component';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';
import { AssetPercentageInWalletPipe } from './pipes/asset-percentage-in-wallet.pipe';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    WalletsListComponent,
    HeaderComponent,
    SidebarComponent,
    WalletsListItemComponent,
    WalletDetailsComponent,
    AssetsListComponent,
    AssetsListItemComponent,
    AssetCurrentTotalValuePipe,
    AssetPercentageInWalletPipe,
    AssetProfitPipe,
    CurrencySymbolPipe,
    NumberFieldComponent,
    CurrencyFieldComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
