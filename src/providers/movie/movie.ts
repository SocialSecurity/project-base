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
  private api_key = '&access_token=EAACEdEose0cBAB0kCmHNAeg6dpz6dH37f5ZBTZBkR1iURXEaSjvPidydlfqkuyboZBxBHccxsJnyaatWMqVtOztU59KDqnZCgyOyt9tm9EIGTsFHGVhhlqByWvRyXmhp0Lg5r71qINIYWAZA6gcrZAZAXOxDeDuR1FZBM0z1r7MAgLLL3tormKVqtShy9AhUZA5ZBq1JEEKzs3QgZDZD';
  constructor(public http: Http) {

  }

  getLikes(){
    let result = this.http.get(this.urlBase+'flowupgestao?fields=posts.limit(4){likes{name,pic_large}}'+this.api_key);
    return result }

}
