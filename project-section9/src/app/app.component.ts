import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-section9';

  accounts: {name: string, status: string}[] = [];

  constructor (private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}){
    this.accountsService.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}){
    this.accountsService.updateAccount(updateInfo.id, updateInfo.newStatus);
  }
}
