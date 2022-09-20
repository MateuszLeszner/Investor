import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WalletsListComponent } from './components/wallets-list/wallets-list.component';
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
import { SidebarComponent } from './components/_layout/sidebar/sidebar.component';
import { AssetsTableComponent } from './components/wallet-details/assets-table/assets-table.component';
import { AssetsTableHeaderComponent } from './components/wallet-details/assets-table/assets-table-header/assets-table-header.component';
import { AssetsTableFooterComponent } from './components/wallet-details/assets-table/assets-table-footer/assets-table-footer.component';
import { AssetsTableContainerComponent } from './components/wallet-details/assets-table/assets-table-container/assets-table-container.component';
import { AssetsTableAssetRowComponent } from './components/wallet-details/assets-table/assets-table-asset-row/assets-table-asset-row.component';
import { AssetsTableCollapseButtonComponent } from './components/wallet-details/assets-table/assets-table-collapse-button/assets-table-collapse-button.component';
import { SmallButtonComponent } from './components/_shared/small-button/small-button.component';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    WalletsListComponent,
    SidebarComponent,
    WalletsListItemComponent,
    WalletDetailsComponent,
    CurrencySymbolPipe,
    NumberFieldComponent,
    CurrencyFieldComponent,
    TextFieldComponent,
    DeleteButtonComponent,
    AssetsTableComponent,
    AssetsTableHeaderComponent,
    AssetsTableFooterComponent,
    AssetsTableContainerComponent,
    AssetsTableAssetRowComponent,
    AssetsTableCollapseButtonComponent,
    SmallButtonComponent
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
