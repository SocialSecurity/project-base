import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the BeforeLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-before-login',
  templateUrl: 'before-login.html',
})
export class BeforeLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  public toLoginPage():void {
    this.navCtrl.push(LoginPage)
  }
  public toTabsPage():void {
    this.navCtrl.push(TabsPage)
  }
}
