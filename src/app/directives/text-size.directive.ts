import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextSize]'
})
export class TextSizeDirective implements OnInit{

  constructor(
    private element: ElementRef
    ) { 
  }

  ngOnInit(): void {
    this.element.nativeElement.style.fontSize = '20px'
    this.element.nativeElement.style.color = 'white'
  }
}
