import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let key_name = 'config';
@Injectable()
export class ConfigProvider {

  private config = {
    status_slide: false,
  }
  constructor() {
  }

  public getConfigShowSlide(): any {
    let config_ = JSON.parse(localStorage.getItem(key_name));
    if(config_ != null){
      return config_.status_slide;      
    }else{
      return null;
    }
  }
  public setConfigShowSlide(status_slide?:boolean) {
    if(status_slide){
      this.config.status_slide = status_slide;
    }
    localStorage.setItem(key_name, JSON.stringify(this.config))
   }
}
