import { Component, OnInit, ViewChild } from '@angular/core';
import { PhRegisterComponent } from '../../components/ph-register/ph-register.component'
import { Router } from '@angular/router';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
// import * as admin from "firebase-admin";
// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: 'dawaey-a0eee',
//     clientEmail: 'firebase-adminsdk-9605t@dawaey-a0eee.iam.gserviceaccount.com',
//     privateKey:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2uu46FQqfWC20\n+QBT3sKbP9XLXjaT5XUWV93/7o4Vr5sI6dGF4jRqWvD5VBD1UONgi4dP/Ex7FemK\nDQ7SSWOSWbdgKaIlD3bopy/B0eZUwLgJLcYdNTYrmBbLDQYTFd27L0trHC0G0b7F\n35hULdrlLUFawKru+c+SHDmtSPT6+daZygyOs8inxujxwPlGJzrWF/OYFdOAE8cF\nQPiG7r/gIhgkQqoxzyA+R79+OEhY0075CfvPwMtAgn3bJom8F7KLABfTyuQJiS20\ng4LvfCbXsJ+1LMDWHNxOvvpo4/OKOruu/LaKIC6G4nHlyjkjYUsov3yPW1cvLSMj\n86w6KB7BAgMBAAECggEAAa/eJOfdnnXlXzBkjJolA3mleD/uX+noHmWseo5yzSgC\n3Vy+52DrwrIichKYXTDXNI39NvKqbAjHeZO6jKOoyF1rLOhZuepONTcZGVFaZyBo\nD7rtJTvMOIK5QOliD30TjwTjTbpFwwc5E8NSnrbN1rTW4n2XE5Rog1ZbG25t3d1Y\nszOSyqNVgCH1x+ymikQUYqM35VJYGNRp+c6hzfZlHZXXrChohlg7IaO8BGrCYuQb\n1OcAcgKiFUuu7DFHMRnkEh++Ws4EfXgSNQ6BHbpCn/eyLq265GsCpzO8/tpPWMg4\nvjZKoEstplqM8c1qZ/LoRLRZFxN9BZkYatts6A2vtQKBgQDpGptBm7x3gjMfQ6Xd\nSSHzwJd9fDCGW3VtohBgQ6+oTwSV6Zr9hiZAe0FZ4i6Kx4jbeMihUQbmNJF30z0b\nTqjw82DaL6vsnkrdH00/J3mRqTizRrwjIfY+MoVWqhTdpXDJ3dcayIdVIk4FYWi2\n655RC27vegqgWw5+K/iOfYwYdQKBgQDIra13oBB6GMUfc8VIabJaRlIl2b1DyTQc\n2fg0mvHg/OID0zIELA79kjZsBDrhKdFXZACYVRdf9YJ8tbAJdg1/uVZ5lYDJDogX\na+NORGHIWY7tA2lcsAEnnjv1MVk+9Wd+FlK7WP9b5W5ys7QxxB6/6h5xid+orIJk\nZv7X/qzDnQKBgQCl+OrIySFlGlBaF2mW6MaC7wMuNum6EI7I89ajJC6DMVf7gax4\njTbZPKloXVJ0P+RjGFoJ+k5mRNG6tq5Qri49+ZxhXgYU4RQ+41W1/N5jZ1DW3SuB\n/GF/Iaus7EcVFgH7ybep+1PYuydAT34mmBdOb0yauJOuX4cvMRG2KxBALQKBgAiD\nNYSJialkO5hl9Mxpj2M88GcioWCqvEctB9ZTbEc68utungSHSet/tEdItqaue27V\nkyDjGya651oa6ui71T7BweVObjQZJbS4ot/DDtLM2b88EdAYtzPTBoAUI9ED3+v9\nTm0cDVj8ln7PGKmzxAooCDqQuqgRCUbxB4ZqCzIRAoGAZzhQQFzoPP8ot1BbRM8B\n4jYkTR/kpQLFowAsGNnWmU6sWZEm+6FdDYqGc6o/1PHndYhEUKtb4P8qfQ1WqMPa\n8xp93sjBFAktPX4cEFi6yyERvmqBxAQvAH8S9F3DpwvmX6QOx0g6HsRw/TsF81fF\nbZ3UFlzNx9u1cWnqs+Nmjxo=\n-----END PRIVATE KEY-----\n"}),
//   databaseURL: 'https://dawaey-a0eee.firebaseio.com'
// });
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(PhRegisterComponent)
  public phReg: PhRegisterComponent;
  ///free register
  rFreeEmail: string = '';
  rFreePassword: string = '';
  rCFreePassword: string = '';
  equal: boolean = false;
  ///free Login
  lFreeEmail: string = '';
  lFreePassword: string = '';


  freeProcess: {} = {
    freeType: '',
    freeTitle: '',
    forFreeRegister: false
  }
  forFreeLogin = true;
  forFreeReset = false;
  resetFreeEmail: string = '';
  forFreeRegister: boolean = false
  forPayLogin = true;
  forPayRegister = false;
  payOption: string = '';
  locationChecked: boolean = false;
  locationObtained: boolean = false;
  coords: {} = { lat: '', long: '' };
  coordsResult: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private sNotify: SnotifyService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.collapse();
  }


  ///////////////////////delete unverified Emails
    //////Signup With Email verify
  freeSignUp() {
    this.auth.freeEmailSignUp(this.rFreeEmail, this.rFreePassword);
  }

  //////SignIn With Email verify
  freeSignIn() {
    this.auth.freeEmailSignIn(this.lFreeEmail, this.lFreePassword).then(data => {
      if (data.user.emailVerified) {
        alert('this Email is verified');
      } else {
        alert('this Email is not verified :)');
      }
    })
      .catch(() => {
        alert('ERRRRRRRRRRRRRRRRRRRRRRRRRRRoRRRRRRRRR');
      })

    this.rFreeEmail = ''; this.rFreePassword = '';
  }
  ////// Empty Inputs
  empty() {
    this.lFreeEmail = ''; this.lFreePassword = ''; this.rCFreePassword = '';
    this.rFreeEmail = ''; this.rFreePassword; this.resetFreeEmail = '';
  }



  ////// Confirm Password
  onChange() {
    if (this.rCFreePassword == this.rFreePassword) {
      this.equal = true;

    } else {
      this.equal = false;
    }

  }
  ///// Locate Place
  locationResult() {

    if (this.locationChecked) {

      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.coords['lat'] = position.coords.latitude.toFixed(7);
          this.coords['long'] = position.coords.longitude.toFixed(7);
          this.coordsResult = 'تم تحديد الموقع بنجاح';
          this.locationObtained = true;
          console.log(this.coords);
          $(() => {
            $("#phRegBtn").show();
            $("#phRegLabel").show();
          })
        }

      }, () => {
        this.coordsResult = 'قم بالسماح للموقع بتحديد موقعك';
      })

    }

    // onKeyUp() {
    //     if (this.antiBot.checkAnswer()) {
    //         document.getElementById('code').classList.add('ng-valid')
    //     } else {
    //         document.getElementById('code').classList.replace('ng-valid', 'ng-invalid')
    //     }
    // }

  }

  ///////////////////////////////// Jquiry Methods  /////////////////////////////
  collapse() {
    $(() => {
      //////on Modal Hide ////////
      $(".modal").on("hidden.bs.modal", () => {
        $("#regImage").hide();
        $("#phRegLabel").hide();
        $("#custRegLabel").hide();
        $("#phRegBtn").hide();
        $("div.collapse").removeClass("show");
        $(".modal").find("input,textarea,select").val('').end();
        $("#checkboxG2").prop('checked', false);
        $("#checkboxG22").prop('checked', false);
        $("#checkboxG33").prop('checked', false);
        this.forFreeLogin = true;
        this.forFreeReset = false;

      });
      ////on Modal loading ///////////
      $('#phreg').on('show.bs.modal', () => {
        this.phReg.locationChecked = false;
        $("#captchError").hide();
      })
      $('.modal').on('show.bs.modal', () => {
        this.locationChecked = false;
        this.forFreeLogin = true;
        this.forFreeReset = false;

      })
    })
  }



  
  // removeUnverified() {
  //   // Start listing users from the beginning, 1000 at a time.
  //   this.listAllUsers();
  // }


  // listAllUsers(nextPageToken?) {
  //   // List batch of users, 1000 at a time.
  //   admin.auth().listUsers(1000, nextPageToken)
  //     .then(function (listUsersResult) {
  //       listUsersResult.users.forEach(function (user) {
  //         // const user = userRecord.toJSON();
  //         if (!user.emailVerified) {
  //           admin.auth().deleteUser(user.uid)
  //             .then(function () {
  //               console.log("Successfully deleted user");
  //             })
  //             .catch(function (error) {
  //               console.log("Error deleting user:", error);
  //             });
  //         }
  //       });
  //       if (listUsersResult.pageToken) {
  //         // List next batch of users.
  //         this.listAllUsers(listUsersResult.pageToken)
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("Error listing users:", error);
  //     });
  // }


}
