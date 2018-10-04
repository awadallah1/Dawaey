import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
  code1: number;
  code2: number;
  error: string;
  answer: number;
  constructor() {

  }

  ngOnInit() {
    window.addEventListener("hidden.bs.modal", function(){
     alert('booooooooooooooooooo')
  });
    this.code1 = Math.floor((Math.random() * 5) + 1);
    this.code2 = Math.floor((Math.random() * 5) + 1);
  }
  onKeyUp() {
    this.checkAnswer()
  }

  checkAnswer() {
    this.error = null;
    if ((this.code1 + this.code2) == this.answer) {
      document.getElementById('code').classList.add('ng-valid')
      return true;
    } else {
      document.getElementById('code').classList.replace('ng-valid', 'ng-invalid')
      this.answer = null;
      this.error = "أكتب الناتج الصحيح";
    }
  }

}
