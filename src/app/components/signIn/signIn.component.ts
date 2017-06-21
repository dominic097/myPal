/**
 * Created by Dominic on 6/6/2017.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'signIn.component.html',
  styleUrls: ['signIn.component.scss']
})
export class SignInComponent implements OnInit {

  private returnUrl: string;

  constructor(private auth: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signBtnClick() {
    this.auth.login('', '', this.returnUrl);
  }
}
