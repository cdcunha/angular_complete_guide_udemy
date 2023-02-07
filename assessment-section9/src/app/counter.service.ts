import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInativeCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInativeCounter++;
    console.log('activeToInative: ' + this.activeToInativeCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('inactiveToActive: ' + this.inactiveToActiveCounter);
  }
}
