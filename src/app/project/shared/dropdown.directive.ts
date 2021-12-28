import { Directive, OnInit, ViewContainerRef, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    isOpen: boolean = false;

    constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

    ngOnInit(): void { }

    @HostListener('document:click', ['$event']) onClick(_event: Event) {
        const dropdownToggle = this.elementRef.nativeElement.querySelector('.dropdown-toggle');
        const dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');

        this.isOpen = this.elementRef.nativeElement.contains(<HTMLElement>_event.target) ? !this.isOpen : false;

        if (!this.isOpen) {
            this.renderer.setAttribute(dropdownToggle, 'aria-expanded', 'false');
            this.renderer.removeClass(dropdownMenu, 'show');
        } else {
            this.renderer.setAttribute(dropdownToggle, 'aria-expanded', 'true');
            this.renderer.addClass(dropdownMenu, 'show');
        }
    }
}
