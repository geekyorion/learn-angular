import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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
export class ServerElementComponent implements OnInit {

  // if we pass any string here then we can not bind the data using element property now
  @Input('serverElement') element: { name: string, type: string, content: string } = {
    name: '', type: '', content: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
