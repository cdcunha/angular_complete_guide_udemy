import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

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
          observer.next(count)
          count++;
        }, 1000);
    });

    this.firstObsSubscription =customIntervalObservable.subscribe(
      data => {
        console.log(data);
    });
  }

  ngOnDestroy(): void {
    //We need to unsubscribe the custom Observable to avoid Memory Leaks.
    //If the Observable is provided by Angular we don't need to unsubscribe
    this.firstObsSubscription.unsubscribe();
  }
}
