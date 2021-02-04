import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  setColor(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }

}
