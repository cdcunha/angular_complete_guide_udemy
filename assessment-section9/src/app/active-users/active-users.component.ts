import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();
  activeToInactiveCount = 0;

  constructor (private usersService: UsersService) {}

  ngOnInit(): void {
    this.activeToInactiveCount = this.usersService.activeToInactiveCount;
  }

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.usersService.inactivateUser(id);
    this.activeToInactiveCount = this.usersService.activeToInactiveCount;
  }
}
