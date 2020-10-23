import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { debounceTime, delay, switchMap, throttleTime } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import { usersDataMock, UsersService } from '../../services/users.service';

@Injectable()
export class UserEffects {

  @Effect()
  loadUsers$ = this.actions$.pipe(
      ofType(UserActions.loadUsers),
      // usually a rest call to external source
      switchMap(() => {
        return this.usersService.getUsers();
      }),
      // debounceTime(2000),
      switchMap(users =>  {
            console.log(users);
            return of(UserActions.loadUsersSuccess({ data: users }));
          },
      ));

  constructor(private usersService: UsersService, private actions$: Actions) {}

}
