import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { Ng2ImgMaxModule } from 'ng2-img-max';
//// Toasters notify
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ToastrModule } from 'ngx-toastr';

//// Components 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PhNotesComponent } from './components/subComponents/ph-notes/ph-notes.component';
import { CustNotesComponent } from './components/subComponents/cust-notes/cust-notes.component';
import { PhRegisterComponent } from './components/ph-register/ph-register.component';
import { CaptchaComponent } from './components/subComponents/captcha/captcha.component';
import { LoadingComponent } from './components/subComponents/loading/loading.component';
import { CustRegisterComponent } from './components/cust-register/cust-register.component';

//// Services
import { AuthService } from "../app/services/auth.service";

const appRoutes: Routes = [
  
  { path: '', component: LoginComponent},
   { path: '**', redirectTo: '#', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PhNotesComponent,
    CustNotesComponent,
    PhRegisterComponent,
    CaptchaComponent,
    LoadingComponent,
    CustRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    SnotifyModule,
    Ng2ImgMaxModule, // Resize Image size before uploading to firestore 
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        easeTime: 400
      }), // ToastrModule added
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
  SnotifyService,AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
