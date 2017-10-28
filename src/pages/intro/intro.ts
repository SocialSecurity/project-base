import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeforeLoginPage } from '../before-login/before-login';
import { StatusBar } from '@ionic-native/status-bar';
/**
  USAR STATUS BAR 
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    // testes
    // this.statusBar.overlaysWebView(true);
    // this.statusBar.backgroundColorByHexString('#ff0000');
    // this.statusBar.hide();
  }


  public toBeforePage(): void {
    this.navCtrl.push(BeforeLoginPage)
  }

}
