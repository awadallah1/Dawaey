import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { CaptchaComponent } from '../subComponents/captcha/captcha.component';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-ph-register',
    templateUrl: './ph-register.component.html',
    styleUrls: ['./ph-register.component.css']
})
export class PhRegisterComponent implements OnInit {

    // @ViewChild(CaptchaComponent)
    // private antiBot: CaptchaComponent;

    locationChecked: boolean = false;
    load = '';
    reader = new FileReader();
    uploadedImage: File; //image resize
    downloadURL: Observable<string>;
    imageURL: string;
    picFile: File;
    myEvent: any;
    url: string
    constructor(public sanitizer: DomSanitizer, private ng2ImgMax: Ng2ImgMaxService,private toastr: ToastrService) { }

    ngOnInit() {

    }
    /// Image with resize
    onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0];
            if (!event.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
                this.toastr.error('image should be JPG|JPEG|PNG|GIF', 'Employees', { timeOut: 2000 });
                // this.url = '';
                this.load = '';
            }

            else if (event.target.files[0].size > (3 * 1024 * 1000)) {
                this.toastr.error('image should be not more than 3M', 'Employees', { timeOut: 2000 });
                // this.url = '';
                this.load = '';
            }
            else {
                this.load = 'ok'
                this.ng2ImgMax.resizeImage(image, 500, 600).subscribe(
                    result => {
                        this.uploadedImage = new File([result], result.name);
                        this.reader.readAsDataURL(this.uploadedImage); // read file as data url
                        this.reader.onload = () => {
                            this.url = this.reader.result.toString()
                            this.myEvent = this.uploadedImage;
                            this.load = '';
                        }
                    },
                    error => {
                        console.log('😢 Oh no!', error);
                    }
                );
            }

        }

    }







    console() {
        console.log(this.locationChecked);
    }
    // onKeyUp() {
    //     if (this.antiBot.checkAnswer()) {
    //         document.getElementById('code').classList.add('ng-valid')
    //     } else {
    //         document.getElementById('code').classList.replace('ng-valid', 'ng-invalid')
    //     }
    // }

}
