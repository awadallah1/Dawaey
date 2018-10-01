import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  freeProcess: {} = {
    freeType: '',
    freeTitle: '',
    forFreeRegister: false}
    forFreeLogin=true;  
  forFreeRegister:boolean= false
  forPayLogin=true;
  forPayRegister=false;
  constructor() { }

  ngOnInit() {

  }

}
