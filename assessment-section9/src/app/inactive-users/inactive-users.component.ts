import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  inactiveToActiveCount = 0;

  constructor (private usersService: UsersService) {}

  ngOnInit(): void {
    this.inactiveToActiveCount = this.usersService.inactiveToActiveCount;
  }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.usersService.activateUser(id);
    this.inactiveToActiveCount = this.usersService.inactiveToActiveCount;
  }
}
