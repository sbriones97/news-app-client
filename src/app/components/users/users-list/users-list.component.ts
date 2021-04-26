import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';

interface User {
  id:number;
  name:string;
  email:string;
  phone:string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  @Input('items') users:User[] = []

  @Output() onUserSelected:EventEmitter<any> = new EventEmitter()

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().then(response => {
      this.users = response
    })
  }

  selectUser(user) {
    console.log('Seleccioné a ', user)
    this.onUserSelected.emit(user)
  }
}
