import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-in-ts', // <app-html-in-ts></app-html-in-ts>
  // selector: '[app-html-in-ts]',  // <div app-html-in-ts></div>
  // selector: '.app-html-in-ts', // <div class="app-html-in-ts"></div> // angular doesn't support id selector and any other pseudo selectors
  template: `
    <p>from ts file</p>
    <p class="text-info second-para">
      we either need to have templateUrl or the template in the ts file to tell
      the angular about the markup that needs to be rendered
    </p>
  `,
  // styleUrls: ['./html-in-ts.component.css']
  styles: [`
    p { color: darkblue; }
  `, `
    .second-para:hover { border: 1px solid darkblue; }
  `]
})
export class HtmlInTsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
