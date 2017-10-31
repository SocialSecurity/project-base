import { Component, ViewChild, ElementRef } from "@angular/core/";
import { MapsProvider } from '../../providers/maps/maps';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MapsProvider
  ]
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef;
  constructor(
    public navCtrl: NavController,
    private mapsProvider: MapsProvider
  ) { }

  ionViewDidLoad() {
    this.mapsProvider.showMap(this.mapRef);
  }
  
  openLoginPage() {
    this.navCtrl.push(LoginPage)

  }
}