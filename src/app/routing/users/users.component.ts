import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    { id: 1, name: 'Shashank' },
    { id: 2, name: 'GeekyOrion' },
    { id: 3, name: 'Orion' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
