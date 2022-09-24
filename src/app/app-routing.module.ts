import { NgModule } from '@angular/core';
import { WalletDetailsComponent } from './components/wallet-details/wallet-details.component';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./components/auth/sign-in/sign-in.component";
import {SignUpComponent} from "./components/auth/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./components/auth/forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./components/auth/verify-email/verify-email.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: 'wallet/:id', component: WalletDetailsComponent },
  { path: 'auth', component: SignInComponent },
  { path: 'auth/sign-in', component: SignInComponent },
  { path: 'auth/register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'auth/forgot-password', component: ForgotPasswordComponent },
  { path: 'auth/verify-email-address', component: VerifyEmailComponent },
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
