import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements DoCheck {
  @Input() gameNumber: number;
  isEven: boolean;

  ngDoCheck(){
    this.isEven = this.gameNumber % 2 === 0;
  }
}
