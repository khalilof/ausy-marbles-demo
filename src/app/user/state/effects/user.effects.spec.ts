import { fakeAsync, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { UserEffects } from './user.effects';
import { cold, hot } from 'jest-marbles';
import { UsersService } from '../../services/users.service';
import { User } from '../reducers/user.reducer';

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;
  let usersService: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        {
          provide: UsersService,
          useValue: { getUsers: jest.fn() },
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserEffects);
    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should handle loadUsers action and trigger loadUsersSuccess action', fakeAsync(() => {
    const mockUsers: User[] = [
      {
        email: 'FIRST@any.com', firstName: 'FIRST_name', lastName: 'FIRST_last',
      },
      {
        email: 'SECOND@any.com', firstName: 'SECOND_name', lastName: 'SECOND_last',
      },
    ];

    const action = UserActions.loadUsers();
    const completion = UserActions.loadUsersSuccess({data: mockUsers });

    actions$ = hot('-a-------', { a: action });
    const response = cold('-a|', { a: mockUsers });
    const expected = cold('--b', { b: completion });

    usersService.getUsers = jest.fn(() => response);

    expect(effects.loadUsers$).toBeObservable(expected);
  }));


});
