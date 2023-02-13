import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //We don't need an Event neither a method to emit the event, because we have a router
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }
}
