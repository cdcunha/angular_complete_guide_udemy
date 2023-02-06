import { Injectable } from '@angular/core';

/**
   * The new way to do DI in Angular 6 and above. 
   * providedIn: This makes the service singleton 
   * root......: available to the entire application 
   * 
   * Note: the service can be added in providers, on app.modules, instead to use Injectable decorator
   */
@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor() { }

  logStatusChange(status: string){
    console.log('A server status changed, new status: ' + status);
  }
}
