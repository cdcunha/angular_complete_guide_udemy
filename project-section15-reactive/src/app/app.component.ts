import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'), //Default value = male
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
