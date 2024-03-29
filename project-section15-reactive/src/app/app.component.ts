import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
  forbiddenUsernames = ['Cris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'), //Default value = male
      'hobbies': new FormArray([])
    });
    //valueChanges shows the value of the form
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    //statusChanges shows the form status (INVALID, PENDING, VALID)
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'userData': {
        'username': 'Max',
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm);
    
    //To reset an object to specific values
    this.signupForm.reset();
  }

  get controls(){
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbiden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    })

    return promise;
  }
}
