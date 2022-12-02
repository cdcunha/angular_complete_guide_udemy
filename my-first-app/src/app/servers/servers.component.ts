import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //To use as component <app-servers></app-servers>
  //selector: '[app-servers]', //To use as an html attribute: <div app-servers></div>
  //selector: '.app-servers', //To use an html class: <div class="app-servers"></div>
  //templateUrl: './servers.component.html', //Instead using templateUrl, we can use template inline
  template: `<app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
