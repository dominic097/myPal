import {Component} from '@angular/core';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';

  private user = {
    fName: 'Dominic',
    email: 'dominic097@gmail.com',
    profilPic: '',
    shtDesc: '{{Javascript Developer}}',
    isLoggedIn: false
  };

  constructor(private auth: AuthService) {
    this.user.isLoggedIn = this.auth.isLoggedIn();
  }
}
