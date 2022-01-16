import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  /**
   * this providers works for the child components too
   * so if we import the same service in child components
   * then the child component service instance will overwrite the parent instance
   * and the account addition and updation won't work
   */
  providers: [AccountsService]
})
export class ServicesComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

}
