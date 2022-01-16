export class AccountsService {
    accounts = [
        { name: 'Master account', status: 'active' },
        { name: 'Test account', status: 'inactive' },
        { name: 'Hidden account', status: 'unknown' }
    ];

    addAccount(name: string, status: string) {
        this.accounts.push({ name, status });
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }
}
