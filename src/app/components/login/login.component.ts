import { Component, OnInit } from '@angular/core';
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
    forFreeRegister: false
  }
  forFreeLogin = true;
  forFreeRegister: boolean = false
  forPayLogin = true;
  forPayRegister = false;
  payOption: string = '';

  constructor() { }

  ngOnInit() {
    this.collapse();
    }
       

  



///////////////////////////////// Jquiry Methods  /////////////////////////////
  
collapse(){
    $(document).ready(function () {
      $(".modal").on("hidden.bs.modal", function(){
        $("div.collapse").removeClass("show");
        $("#phreg").find("input,textarea,select").val('').end();
        // $("#checkboxG2").prop('checked', false);
        // $('label').html('')
    });
  })
  }
}
