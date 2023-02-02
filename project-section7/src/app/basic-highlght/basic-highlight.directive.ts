import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' //the brackets make it be reconized as an element without brackets 
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {} //The private makes the parameter become a private property

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = "green";
    }
}
