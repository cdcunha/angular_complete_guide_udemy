import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string; //the parameter must be the same used in the nativeElement

  constructor(private elRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    //this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //This is better if I don't access to the DOM
    this.rederer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.highlightColor; //Using HostBiding instead Rederer2
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    //this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); //This is better if I don't access to the DOM
    this.rederer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor; //Using HostBiding instead Rederer2
  }
}
