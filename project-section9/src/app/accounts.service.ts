import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) { }

  addAccount(name: string, status: string){
    this.accounts.push({ name, status });

    /**** This is not the right way to use service. 
     **** We should use Dependency Injection
     ****    
    const service = new LoggingService();
    service.logStatusChange(accountStatus);*/

    this.loggingService.logAccountAdded(name, status);
  }

  updateAccount(id: number, newStatus: string){
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
