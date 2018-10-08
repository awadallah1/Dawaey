import { Component, OnInit, ViewChild } from '@angular/core';
import { PhRegisterComponent } from '../../components/ph-register/ph-register.component'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(PhRegisterComponent)
  public phReg: PhRegisterComponent;
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
  collapse() {
    $(()=> {
      //////on Modal Hide ////////
      $(".modal").on("hidden.bs.modal", function () {
        $("#regImage").hide();
        $("#phRegLabel").hide();
        $("#custRegLabel").hide();
        $("#phRegBtn").hide();
        $("div.collapse").removeClass("show");
        $("#phreg").find("input,textarea,select").val('').end();
        $("#checkboxG2").prop('checked', false);
        $("#checkboxG22").prop('checked', false);
        
      });
////on Modal loading ///////////
      $('#phreg').on('show.bs.modal', () => {
          this.phReg.locationChecked=false;
          $("#captchError").hide(); 
      })
    })
  }
}
