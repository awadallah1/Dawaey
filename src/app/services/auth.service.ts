import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, startWith, tap, filter, map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private toaster: ToastrService
  ) { }

  //// Email/Password SignUp Auth ////
  freeEmailSignUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((credetial)=> {
        if (credetial && credetial.user.emailVerified === false) {
          credetial.user.sendEmailVerification().then(() =>{
            console.log("email verification sent to user");
            console.log(credetial.user);
            this.router.navigate(['']);
                });
        }
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

//// Email/Password Login Auth ////
  freeEmailSignIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
}
}
