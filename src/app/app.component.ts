import { Component , OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dawaey';
  ngOnInit() {
    /////////Jquery////////
    
    $(document).ready(function () {
      
      $('nav').fadeIn('slow');
      $('#login').hover(function(){this.style.fontSize='19px';this.style.color='white'},function(){this.style.fontSize='17px';this.style.color='whitesmoke'})
      $(document).on('click',function(e) {
        if(  $(e.target).attr('class') != 'navbar' ) {
            $('#navbarColor01').removeClass('show',);
           
        }
    });
        
      
  });

  
  }

}
