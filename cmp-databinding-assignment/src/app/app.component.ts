import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(lastNumber: number){
    if (lastNumber % 2 === 0)
      this.evenNumbers.push(lastNumber);
    else
      this.oddNumbers.push(lastNumber);
  }
}
