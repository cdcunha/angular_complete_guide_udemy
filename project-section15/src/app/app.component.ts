import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-section15';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //We don't need HTMLFormElement because we're using ngForm
  //onSubmit(form: HTMLFormElement){
  onSubmit(form: NgForm){
    console.log(form);
  }
}
