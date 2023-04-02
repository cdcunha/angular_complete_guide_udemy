import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-section15-assignment6';
  //ViewChild is useful if we need to access the form beform submit it
  //With Angular 8, should be @ViewChild('f', { static: false })
  @ViewChild('f') signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  submited = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  //We'll use @ViewChild instead a parameter
  onSubmit(){
    console.log('Submitting...');
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription
    this.user.password = this.signupForm.value.userData.password;
    this.submited = true;

    console.log('Data submited: ', this.user);
    this.signupForm.form.reset({
      userData: {
        email: '',
        subscription: this.defaultSubscription,
        password: ''
      }
    })
  }

  reset(){
    this.submited = false;
  }
}
