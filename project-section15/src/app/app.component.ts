import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-section15';
  //ViewChild is useful if we need to access the form beform submit it
  @ViewChild('f') signupForm: NgForm; 

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //We don't need HTMLFormElement because we're using ngForm
  //onSubmit(form: HTMLFormElement){
  //We'll use @ViewChild instead a parameter
  //onSubmit(form: NgForm){  
  onSubmit(){
    console.log(this.signupForm);
  }
}
