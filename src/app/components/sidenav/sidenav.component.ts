/**
 * Created by Dominic on 6/6/2017.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'mc-sidenav-menu',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavMenuComponent {
  private user = {
    fName: 'Dominic',
    email: 'dominic097@gmail.com',
    profilPic:'',
    shtDesc: '{{Javascript Developer}}'
  };
}
