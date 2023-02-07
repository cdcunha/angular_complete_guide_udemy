import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInative: number = 0;
  inactiveToActive: number = 0;

  constructor() { }

  countActiveToInactive(): number {
    this.activeToInative++;
    return this.activeToInative;
  }

  countInactiveToActive(): number {
    this.inactiveToActive++;
    return this.inactiveToActive
  }
}
