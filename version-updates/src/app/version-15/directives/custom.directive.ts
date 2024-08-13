import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {
  constructor(public el: ElementRef, public render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, "backgroundColor", "yellow")
  }
}
