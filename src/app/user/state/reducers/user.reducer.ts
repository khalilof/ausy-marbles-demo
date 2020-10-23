import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  isLoading: boolean;
  users: User[];
}

export const initialState: UserState = {
  isLoading: false,
  users: [],
};


export const reducer = createReducer(
    initialState,
    on(UserActions.loadUsers, state => ({...state, isLoading: true})),
    on(UserActions.loadUsersSuccess,
        (state, { data }) => ({...state, users: data, isLoading: false})),
);

