import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') highlightColor: string = 'yellow'; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyHighlight();
  }

  private applyHighlight() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
  }

}
