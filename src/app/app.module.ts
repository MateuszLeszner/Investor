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
import { NgSelectModule } from '@ng-select/ng-select';
import localePL from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { CurrencyFieldComponent } from './components/_shared/currency-field/currency-field.component';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';
import { NumberFieldComponent } from './components/_shared/number-field/number-field.component';
import { TextFieldComponent } from './components/_shared/text-field/text-field.component';
import { DeleteButtonComponent } from './components/_shared/delete-button/delete-button.component';
import { WalletSummaryComponent } from './components/wallet-details/wallet-summary/wallet-summary.component';
import { AssetInfoComponent } from './components/wallet-details/asset-info/asset-info.component';
import { ContainerDetailsComponent } from './components/wallet-details/container-details/container-details.component';
import { ListHeaderComponent } from './components/wallet-details/list-header/list-header.component';
import { NewAssetRowComponent } from './components/wallet-details/new-asset-row/new-asset-row.component';
import { NewContainerRowComponent } from './components/wallet-details/new-container-row/new-container-row.component';
import { NewItemsButtonsComponent } from './components/wallet-details/new-items-buttons/new-items-buttons.component';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    WalletsListComponent,
    HeaderComponent,
    SidebarComponent,
    WalletsListItemComponent,
    WalletDetailsComponent,
    CurrencySymbolPipe,
    NumberFieldComponent,
    CurrencyFieldComponent,
    TextFieldComponent,
    DeleteButtonComponent,
    NewAssetRowComponent,
    WalletSummaryComponent,
    AssetInfoComponent,
    ContainerDetailsComponent,
    ListHeaderComponent,
    NewContainerRowComponent,
    NewItemsButtonsComponent
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
