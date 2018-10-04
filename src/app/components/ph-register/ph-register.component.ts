import { Component, OnInit, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import { CaptchaComponent } from '../subComponents/captcha/captcha.component';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-ph-register',
    templateUrl: './ph-register.component.html',
    styleUrls: ['./ph-register.component.css']
})
export class PhRegisterComponent implements OnInit {
    @ViewChild(CaptchaComponent)
    private antiBot: CaptchaComponent;

    constructor() { }

    ngOnInit() {

    }
    // onKeyUp() {
    //     if (this.antiBot.checkAnswer()) {
    //         document.getElementById('code').classList.add('ng-valid')
    //     } else {
    //         document.getElementById('code').classList.replace('ng-valid', 'ng-invalid')
    //     }
    // }

}
