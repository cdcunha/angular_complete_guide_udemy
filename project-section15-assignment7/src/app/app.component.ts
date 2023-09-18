import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-section15-assignment7';
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  forbiddenProjectNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        // 'projectName': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'projectName': new FormControl(null, [Validators.required], this.forbiddenNameAsync),
        'projectMail': new FormControl(null, [Validators.required]),
        'projectStatus': new FormControl(null)
      })
    });
    console.log('statuses:', this.statuses);
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  // forbiddenName(control: FormControl): {[s: string]: boolean} {
  //   console.log('forbiddenName control.value:', control.value)
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbiden': true};
  //   }
  //   return null;
  // }

  forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value.toLowerCase() === 'test'){
          resolve({'nameIsForbiden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    })
    return promise;
  }
}
