import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  /**
   * Instead to use EventEmitter, let's use the AccountsService
   */
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountsService: AccountsService){}

  onSetTo(status: string) {
    /**
    * Instead to use EventEmitter, let's use the AccountsService
    */
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateAccount(this.id, status);
  }
}
