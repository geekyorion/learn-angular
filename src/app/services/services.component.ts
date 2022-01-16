import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  accounts = [
    { name: 'Master account', status: 'active' },
    { name: 'Test account', status: 'inactive' },
    { name: 'Hidden account', status: 'unknown' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
