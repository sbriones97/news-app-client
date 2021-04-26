import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users:any[] = []
  selectedUser = {}

  constructor(private userService:UserService) {
    console.log('El user service: ', userService)
  }

  ngOnInit(): void {
    console.log('Users Initialized')
    this.userService.getUsers().then(response => {
      this.users = response
    })
  }

  handleClick(user) {
    console.log('Usuario seleccionado: ', user)
  }

  handleUserSelected(user) {
    console.log('Usuario seleccionado: ', user)
    this.selectedUser = user
  }
}
