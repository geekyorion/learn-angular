import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {

    // we want to set the property to appUnless so we need to make sure that it uses the same name
    @Input() set appUnless(condition: boolean) {
        if (!condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void { }

}
