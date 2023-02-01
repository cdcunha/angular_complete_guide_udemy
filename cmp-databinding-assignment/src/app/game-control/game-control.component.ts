import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<{gameNumber: number}>();
  @ViewChild('buttonStart') buttonStart: ElementRef;
  isGameStarted: boolean;
  isGameStoped: boolean;
  interval = 1000;
  actualNumber: number;
  intervalId: any;

  constructor(){
    this.actualNumber = 0;
  }

  onStartGame(){
    this.actualNumber = 0;
    this.intervalId = setInterval(() => {this.gameStarted.emit({gameNumber: this.actualNumber++})}, this.interval);
    this.isGameStarted = true;
    this.isGameStoped = false;
    this.buttonStart.nativeElement.innerHTML = "Restart";
  }

  onContinueGame(){
    console.log('intervalId: ' + this.intervalId);
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {this.gameStarted.emit({gameNumber: this.actualNumber++})}, this.interval);
    this.isGameStarted = true;
    this.isGameStoped = false;
  }

  onStopGame(){
    clearInterval(this.intervalId);
    this.isGameStarted = false;
    this.isGameStoped = true;
  }
}
