/**
 * Created by Dominic on 6/6/2017.
 */

import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService) {
  }

  ngOnInit() {
    // reset login status
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

}
