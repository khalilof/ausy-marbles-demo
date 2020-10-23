import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.UserState>(
  fromUser.userFeatureKey
);

export const selectUsers = createSelector(
    selectUserState,
    (state: UserState) => {
      return state.users;
    }
);

export const selectIsUsersLoading = createSelector(
    selectUserState,
    (state: UserState) => {
      return state.isLoading;
    }
);
