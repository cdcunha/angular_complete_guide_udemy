import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Changing the View Encapsulation: None, Emulated and ShadowDom
})
export class ServerElementComponent implements 
  OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy
 {
  //Creating custom property. Ex: @Input() element 
  //              OR using alias: @Input('srvElement') element
  @Input('srvElement') element: {type: string; name: string, content: string};
  @Input() name: string;

  //Using Local Reference in template by ViewChild (static option is true only if must be used in ngOnInit)
  @ViewChild('heading', {static: true}) header: ElementRef;

  //Using Local Reference in parent template by ContentChild
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor(){
    console.log('0) constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1) ngOnChanges called!');
    console.log(changes);
    /**
     * SimpleChanges has the follow properties
     * 1) currentValue
     * 2) firstChange (bool)
     * 3) previousValue
     */
  }

  ngOnInit(): void {
    console.log('2) ngOnInit called!');
    //Here the Text Context is empty
    console.log('Header Text Context: ' + this.header.nativeElement.textContent);
    console.log('Paragraph Text Context: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('3) ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('4) ngAfterContentInit called! Works only for ng-content');
    console.log('Paragraph Text Context: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('5) ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('6) ngAfterViewInit called!');
    //Here the Text Context is NOT empty
    console.log('Header Text Context: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('7) ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('8) ngOnDestroy called!');
  }
}
/**Angular Lifecycle Hooks
 * 0) constructor
 * 1) ngOnChanges..........: Called after a bound input property changes (properties decorated with @Input)
 * 2) ngOnInit.............: Called once the component is initialized
 * 3) ngDoCheck............: Called during every change detection run
 * 4) ngAfterContentInit...: Called after content (ng-content) has been projected into view
 * 5) ngAfterContentChecked: Called every time the projected content has been checked
 * 6) ngAfterViewInit......: Called after the component’s view (and child views) has been initialized
 * 7) ngAfterViewChecked...: Called every time the view (and child views) have been checked
 * 8) ngOnDestroy..........: Called once the component is about to be destroyed
 */
