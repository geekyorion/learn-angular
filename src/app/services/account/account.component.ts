import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // removing AccountsService from the providers so that it doesn't overwrite the parent's instance
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account!: { name: string, status: string };
  @Input() id!: number;

  constructor(/* private loggingService: LoggingService,*/ private accountsService: AccountsService) { }

  ngOnInit(): void { }

  onSetTo(newStatus: string) {
    this.accountsService.updateStatus(this.id, newStatus);
    // this.loggingService.logStatusChanged(newStatus);
    this.accountsService.statusUpdated.emit(newStatus);
  }

}
