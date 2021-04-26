import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  @Input() user = {
    name: ""
  }

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // this.userService.getUsersById(params.id)
      //   .then(response => {
      //     console.log('User: ', response)
      //   })
    })
  }

}
