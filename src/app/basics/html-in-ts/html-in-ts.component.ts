import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-in-ts',
  template: `
    <p>from ts file</p>
    <p>
      we either need to have templateUrl or the template in the ts file to tell
      the angular about the markup that needs to be rendered
    </p>
  `,
  styleUrls: ['./html-in-ts.component.css']
})
export class HtmlInTsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
