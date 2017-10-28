import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class MovieProvider {
  private urlBase = 'https://graph.facebook.com/v2.10/';
  private api_key = '&access_token=EAACEdEose0cBAL8gTiQrP8r66ZAjNb3w1uGcLpsNhDMg5OpZBCKvLMlllQyXPD17iX95Ip0cqmnMJKXXlzSWG29JZCtI45ifrZBp13qYkbLNCieSk5hR6hhyOuLMWk0moGg6iaZB9mpRpsMltePnxuJfCFD36ypfiE5yIiczKZAR00v07oTB5W5nIOnrw0uEpxtN7LJSLAC6HneXaXKZARIneLkBLoY05k6WBZBcSl0zlAZDZD';
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLikes(){
    let result = this.http.get(this.urlBase+'flowupgestao?fields=posts.limit(2){likes{name,pic_large}}'+this.api_key);
    return result }

}
