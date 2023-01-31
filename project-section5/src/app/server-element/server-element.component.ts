import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Changing the View Encapsulation: None, Emulated and ShadowDom
})
export class ServerElementComponent {
  //Creating custom property. Ex: @Input() element 
  //              OR using alias: @Input('srvElement') element
  @Input('srvElement') element: {type: string; name: string, content: string};
}
