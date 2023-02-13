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
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    //This is not the best approach
    // this.signupForm.setValue({
    //     userData: {
    //       username: suggestedName,
    //       email: '',
    //       gender: 'male'
    //     },
    //     secret: 'pet',
    //     questionAnswer: ''
    // })

    //This is the best approach to fill the form. PatchValue override only part of the form
    this.signupForm.form.patchValue({ 
      userData: {
        username: suggestedName
      }
    });
  }

  //We don't need HTMLFormElement because we're using ngForm
  //onSubmit(form: HTMLFormElement){
  //We'll use @ViewChild instead a parameter
  //onSubmit(form: NgForm){  
  onSubmit(){
    console.log(this.signupForm);
  }
}
