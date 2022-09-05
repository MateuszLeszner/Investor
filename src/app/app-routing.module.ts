import { NgModule } from '@angular/core';
import { WalletDetailsComponent } from './components/wallet-details/wallet-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'wallet/:id', component: WalletDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
