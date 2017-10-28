import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public list_movies = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movitProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movitProvider.getLikes().subscribe(
      data => {
        const response = (data as any);
        const object_return = JSON.parse(response._body)
        console.log(object_return.posts.data[1].likes.data);
        this.list_movies = object_return.posts.data[1].likes.data;
      },
      error => {

      })
  }
}
