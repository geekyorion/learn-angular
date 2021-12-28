import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  // if we provide the name of selector as alias then we need to bind the highlight color as [selector]="'value'"
  @Input('appBetterHighlight') highlightColor: string = 'lightgreen';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    /**
     * Using renderer is a better approach, sometimes we work with the service worker or an approach
     * where we don't have access to DOM or element (when angular doesn't run in the browser)
     * then angular handles everything. it accepts 4 arguments:
     *   1. element reference
     *   2. style key
     *   3. style value
     *   4. flag like !important (optional)
     */

    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(_event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
