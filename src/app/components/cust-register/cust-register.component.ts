import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import * as $ from 'jquery';
import { CaptchaComponent } from '../subComponents/captcha/captcha.component';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { SnotifyService, SnotifyPosition } from 'ng-snotify';

@Component({
  selector: 'app-cust-register',
  templateUrl: './cust-register.component.html',
  styleUrls: ['./cust-register.component.css']
})
export class CustRegisterComponent implements OnInit {

  locationChecked: boolean = false;
  locationObtained: boolean = false;
  coords: {} = { lat: '', long: '' };
  coordsResult: string = '';
  load = '';
  reader = new FileReader();
  uploadedImage: File; //image resize
  downloadURL: Observable<string>;
  imageURL: string;
  picFile: File;
  myEvent: any;
  url: string;
  setPosition: any;
  constructor(public sanitizer: DomSanitizer, private ng2ImgMax: Ng2ImgMaxService, private toastr: ToastrService,private snotify: SnotifyService) { }


  ngOnInit() {
  }
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
            $("#custOptions").show();
          })
        }

      }, () => {
        this.coordsResult = 'قم بالسماح لدوائي بتحديد موقعك';
      })


    }


  }
}
