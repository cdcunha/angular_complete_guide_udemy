import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Instead to use EventEmitter is better use Rjxs Subject
  //activaterEmitter = new EventEmitter<boolean>();
  activaterEmitter = new Subject<boolean>();

  constructor() { }
}
