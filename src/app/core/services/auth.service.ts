import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // createUserWithEmailAndPasswordの一行でユーザー登録の実装ができる
  create(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  // authService.crete(email, password)
  //  .then((credential) => credential)
  //  .catch((error) => error)
}
