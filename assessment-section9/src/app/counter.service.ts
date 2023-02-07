import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInative: number = 0;
  inactiveToActive: number = 0;

  constructor() { }

  countActiveToInactive() {
    this.activeToInative++;
  }

  countInactiveToActive() {
    this.inactiveToActive++;
  }
}
