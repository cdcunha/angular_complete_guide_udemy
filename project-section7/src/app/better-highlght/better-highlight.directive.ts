import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit(): void {
    this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //This is better if I don't access to the DOM
    this.rederer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
}
