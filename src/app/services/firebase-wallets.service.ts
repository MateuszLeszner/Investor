import { Injectable } from '@angular/core';
import {Wallet} from "../models/wallet";
import {AuthService} from "./auth.service";
import {Action, AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable({
  providedIn: 'root'
})
export class FirebaseWalletsService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  public getById(id: string):  Observable<Action<DocumentSnapshot<unknown>>> {
    return this.firestore
      .collection(`wallets/users/${this.authService.GetCurrentUserId()}`)
      .doc(id)
      .snapshotChanges();
  }

  public add(wallet: Wallet): Promise<void> {
    return this.firestore
      .collection(`wallets/users/${this.authService.GetCurrentUserId()}`)
      .doc(wallet.id)
      .set(wallet);
  }
}
