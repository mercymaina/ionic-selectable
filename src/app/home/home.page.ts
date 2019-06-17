import { Component } from '@angular/core';
import {IonicSelectableComponent, IonicSelectableModule} from 'ionic-selectable';
import {GlobalserviceService} from '../services/globalservice.service';
class Country {
  public dial_code: string;
  public name: string;
  public code: string;

}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countries: { code: string; dial_code: string; name: string }[] ;
  country: Country;
  // tslint:disable-next-line:variable-name
  phone_number;

  constructor( private service: GlobalserviceService) {
    this.countries = this.service.countries;
   // this.country = this.countries[this.countries.length - 1];
  }
  countryChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {

    console.log('country:', event.value);
    this.country = event.value;
  }

}
