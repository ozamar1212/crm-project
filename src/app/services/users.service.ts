import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private auth: Auth) {}

  LoginWithGoggle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }
}
