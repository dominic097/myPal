/**
 * Created by dominic on 21/6/17.
 */

import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  public _isloggedIn = false;

  constructor(private _http: Http, private router: Router) {
  }

  getToken() {
  }


  login(username: string, password: string, redirectUrl) {
    this._isloggedIn = true;
    // setTimeout(() => {
      this.router.navigateByUrl(redirectUrl);
    // }, 1000);

  }

  logout(): void {
    this._isloggedIn = false;
    this.router.navigate(['/login']);
    // clear token remove user from local storage to log user out
  }

  isLoggedIn() {
    return this._isloggedIn;
  }
}
