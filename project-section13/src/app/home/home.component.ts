import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObsSubscription: Subscription;

  ngOnInit(): void {
    //Building our own observable that every 1s will fire a console log
    // this.firstObsSubscription = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   });

    //Creating a custom Observable
    const customIntervalObservable = new Observable(
      observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 2){
            observer.complete();
          }
          if (count > 3){
            observer.error(new Error('Count is greater than 3!'));
          }
          count++;
        }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
    .pipe(
      filter(
        data => {
          return data > 0;
        }
      ),
      map(
        (data: number) => {
          return 'Round: ' + (+data + 1);
    }))
    .subscribe({
      next: (data) => { console.log(data); },
      error: (error) => { 
        console.log(error);
        alert(error.message);
      },
      complete: () => { console.log('Completed!')}
    });
  }

  ngOnDestroy(): void {
    //We need to unsubscribe the custom Observable to avoid Memory Leaks.
    //If the Observable is provided by Angular we don't need to unsubscribe
    this.firstObsSubscription.unsubscribe();
  }
}
