import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  location: {} = {lat:'',long:''};
  constructor() { }

  getCoords(): object {
    let lat: number;
    let long: number;
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
   
      this.location['lat'] = lat.toString();
      this.location['long'] = long.toString();
    
    })
    return location;
  }
}
