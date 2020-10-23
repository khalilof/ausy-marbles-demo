import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../state/users.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public usersFacade: UsersFacade) { }

  isLoading = false;
  ngOnInit(): void {

  }

}
