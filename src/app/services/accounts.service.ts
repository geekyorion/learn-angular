// to inject any service we need to tell the angular that it is Injectable

import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {

    // injection into AccountsService service
    constructor(private loggingService: LoggingService) { }

    accounts = [
        { name: 'Master account', status: 'active' },
        { name: 'Test account', status: 'inactive' },
        { name: 'Hidden account', status: 'unknown' }
    ];

    addAccount(name: string, status: string) {
        this.accounts.push({ name, status });
        this.loggingService.logStatusChanged(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChanged(status);
    }
}
