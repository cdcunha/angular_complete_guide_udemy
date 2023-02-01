import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements DoCheck {
  @Input() gameNumber: number;
  isOdd: boolean;

  ngDoCheck(){
    this.isOdd = this.gameNumber % 2 !== 0;
  }
}
