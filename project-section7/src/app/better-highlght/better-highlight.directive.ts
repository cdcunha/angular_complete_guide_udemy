import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit(): void {
    
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //This is better if I don't access to the DOM
    this.rederer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); //This is better if I don't access to the DOM
    this.rederer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
