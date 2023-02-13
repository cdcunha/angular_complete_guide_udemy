import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'project-section13';
  userActivated = false;
  activatedSubscription: Subscription;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.activatedSubscription = this.userService.activaterEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }
}
