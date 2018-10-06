import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { Ng2ImgMaxModule } from 'ng2-img-max';
//// Toasters notify
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PhNotesComponent } from './components/subComponents/ph-notes/ph-notes.component';
import { CustNotesComponent } from './components/subComponents/cust-notes/cust-notes.component';
import { PhRegisterComponent } from './components/ph-register/ph-register.component';
import { CaptchaComponent } from './components/subComponents/captcha/captcha.component';
import { LoadingComponent } from './components/subComponents/loading/loading.component';
// services
import { GeoService } from "./services/geo.service";


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
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
  SnotifyService,GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
