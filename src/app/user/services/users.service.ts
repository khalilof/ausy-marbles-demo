import { Injectable } from '@angular/core';
import { User } from '../state/reducers/user.reducer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    // usually HTTP GET /users
    return of(usersDataMock);
  }
}


export const usersDataMock: User[] = [
  {
    email: 'FIRST@any.com', firstName: 'FIRST_name', lastName: 'FIRST_last',
  },
  {
    email: 'SECOND@any.com', firstName: 'SECOND_name', lastName: 'SECOND_last',
  },
  {
    email: 'THIRD@any.com', firstName: 'THIRD_name', lastName: 'THIRD_last',
  },
  {
    email: 'FORTH@any.com', firstName: 'FORTH_name', lastName: 'FORTH_last',
  }
];
