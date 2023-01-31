import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  //Biding Custom events. Ex: @Output() blueprintCreated 
  //           OR with alias: @Output('bpCreated') blueprintCreated
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = ''; <-Commented because I'm using Local reference in template
  //newServerContent = ''; <-Commented to use Local Reference by ViewChild
  @ViewChild('serverContentInput', { static: true }) serverContentInput : ElementRef; //Using Local Reference in template by ViewChild
  
  onAddServer(nameInput: HTMLInputElement){ //Using Local references in template passed by parameter
    console.log('Server Name: ' + nameInput.value);
    console.log('Server Content: ' + this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){ //Using Local references in template passed by parameter
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
