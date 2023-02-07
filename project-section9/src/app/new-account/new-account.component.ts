import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /**
   * This was the only way to do Dependency Injection in Agular before version 6
   */
  //providers: [LoggingService]  
})
export class NewAccountComponent {
  /**
   * Instead to use EventEmitter, let's use the AccountsService
   */
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /**
     * Instead to use EventEmitter, let's use the AccountsService
     */
    //this.accountAdded.emit({ name: accountName, status: accountStatus });
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
