import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

//// Toasters notify
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  
  { path: '', component: LoginComponent},
   { path: '**', redirectTo: '#', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SnotifyModule,
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
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
