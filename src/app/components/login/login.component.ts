import { Component, OnInit, ViewChild } from '@angular/core';
import { PhRegisterComponent } from '../../components/ph-register/ph-register.component'
import { Router } from '@angular/router';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
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
}
