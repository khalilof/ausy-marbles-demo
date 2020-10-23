import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserState } from './reducers/user.reducer';
import { selectIsUsersLoading, selectUsers } from './selectors/user.selectors';
import * as UserActions from './actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade {


  $selectUsers = this.store.pipe(select(selectUsers));
  $selectIsUsersLoading = this.store.pipe(select(selectIsUsersLoading));

  loadUsers(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  constructor(private store: Store<UserState>) { }

}
