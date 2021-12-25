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
  OnDestroy
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

  constructor() {
    console.log('constuctor called')
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
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
