import { Injectable } from '@angular/core';
import { from, interval, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly testData = ['Orange', 'Banana', 'Apple', 'Mango'];

  getFruit(): Observable<string> {
    return interval(1000).pipe(
        take(this.testData.length),
        map(i => this.testData[i])
    );
  }


  getNotifications(): Observable<string> {
    // ws.watch('/user/notifications')
    const notifications = ['User loggedIn', 'new Item created', 'Profile updated', 'User loggedOut'];
    return interval(1000).pipe(
        take(this.testData.length + 1),
        map(i => notifications[i]),
        switchMap( notif => this.format(notif)));
  }

  private format(notif: string): Observable<string> {
    console.log(notif);
    return from(notif + ', ');
  }
}
