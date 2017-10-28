import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  private API_REQRES_URL = 'https://reqres.in/api/';

  constructor(public http: Http) {
  }

  createAccount(email: string, pass: string){
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        pass: pass
      };

      this.http.post(this.API_REQRES_URL + 'register', data)
      .subscribe((result: any) =>{
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      } );
    });
  }

  login(email: string, pass: string){
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        pass: pass
      };

      this.http.post(this.API_REQRES_URL + 'login', data)
      .subscribe((result: any) =>{
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      } );
    });
  }

  getUsers(page: number){
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'users?per_page=10&page=' + page;
      this.http.get(url)
      .subscribe((result: any) =>{
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      } );
    });
  }

  getUser(id: number){
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'users/' + id;
      this.http.get(url)
      .subscribe((result: any) =>{
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      } );
    });
  }

  insetUser(user: any){
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'users';
      this.http.post(url,user)
      .subscribe((result: any) =>{
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      } );
    });
  }

  updateUser(user: any){
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'users/id' + user.id;
      this.http.put(url,user)
      .subscribe((result: any) =>{
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      } );
    });
  }

  removeUser(id: number){
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'users/id' + id;
      this.http.delete(url)
      .subscribe((result: any) =>{
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      } );
    });
  }

}
