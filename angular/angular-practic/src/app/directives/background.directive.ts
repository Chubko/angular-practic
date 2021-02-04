import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {


  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  setBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'silver');
  }

  @HostListener('mouseleave')
  detachBg(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'white');
  }

  @HostListener('click')
  select(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'lightblue');
  }

}
