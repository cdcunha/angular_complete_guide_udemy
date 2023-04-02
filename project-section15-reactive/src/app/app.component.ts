import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-section15-reactive';
  genders = ['male', 'female'];
  // To handle forms using Template-Driven we use NgForm, instead FormGroup (used to hadle forms using Reative mode)
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male'), //Default value = male
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
