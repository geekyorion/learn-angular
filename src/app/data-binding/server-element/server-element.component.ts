import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
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
