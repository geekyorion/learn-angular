import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  // default (it emulates the browser's native Shadow DOM API)
  encapsulation: ViewEncapsulation.Emulated

  // it remove the css encapsulation
  // Note: now the styles act globally for other components too
  // encapsulation: ViewEncapsulation.None

  // it uses the browsers Shadow DOM API to encapsulate CSS styles and inject @shadow-root
  // NOTE: Global styles don't work in the shodow DOM but the component styles will work
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // if we pass any string here then we can not bind the data using element property now
  @Input('serverElement') element: { name: string, type: string, content: string } = {
    name: '', type: '', content: ''
  };

  @ViewChild('elementName') elementNameWithoutStatic: ElementRef | undefined;
  @ViewChild('elementName', { static: true }) elementNameWithStatic: ElementRef | undefined;

  @ContentChild('contentChildDiv') contentChildDivWithoutStatic: ElementRef | undefined;
  @ContentChild('contentChildDiv', { static: true }) contentChildDivWithStatic: ElementRef | undefined;

  constructor() {
    console.group('constructor');
    console.log('constuctor called');
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  // since we used { static: true }
  // so this.elementNameWithStatic and this.contentChildDivWithStatic
  // both have native element here and for onwards lifecycle methods
  ngOnChanges(changes: SimpleChanges): void {
    console.group('ngOnChanges');
    console.log('ngOnChanges called', changes);
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  ngOnInit(): void {
    console.group('ngOnInit');
    console.log('ngOnInit called');
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  ngDoCheck() {
    console.group('ngDoCheck');
    console.log('ngDoCheck called');
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  // this.contentChildDivWithoutStatic has the nativeElement here now and for further lifecycle methods
  ngAfterContentInit() {
    console.group('ngAfterContentInit');
    console.log('ngAfterContentInit called')
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  ngAfterContentChecked(): void {
    console.group('ngAfterContentChecked');
    console.log('ngAfterContentChecked called');
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  // since { static: false } is the default value, this.elementNameWithoutStatic has the nativeElement now and for further lifecycle methods
  ngAfterViewInit() {
    console.group('ngAfterViewInit');
    console.log('ngAfterViewInit called');
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  ngAfterViewChecked(): void {
    console.group('ngAfterViewChecked');
    console.log('ngAfterViewChecked called');
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

  // ngOnDestroy has the access too because it is called before angular destoys the component
  ngOnDestroy(): void {
    console.group('ngOnDestory');
    console.log('ngOnDestory called');
    console.log('ElementWithoutStatic', this.elementNameWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.elementNameWithStatic?.nativeElement);
    console.log('ElementWithoutStatic', this.contentChildDivWithoutStatic?.nativeElement);
    console.log('ElementWithStatic', this.contentChildDivWithStatic?.nativeElement);
    console.groupEnd();
  }

}

// order in which life cycle methods are called
/**
 * 1. constructor
 * 2. ngOnChanges (OnChanges)
 * 3. ngOnInit (OnInit)
 * 4. ngDoCheck (DoCheck)
 * 5. ngAfterContentInit (AfterContentInit)
 * 6. ngAfterContentChecked (AfterContentChecked)
 * 7. ngAfterViewInit (AfterViewInit)
 * 8. ngAfterViewChecked (AfterViewChecked)
 * 9. ngOnDestroy (OnDestroy)
 */
