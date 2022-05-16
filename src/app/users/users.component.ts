import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from '../IUser';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }
    users: IUser[]=[]
    errorMessage:any;
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(usersData => {
        this.users= usersData;
    },error => {this.errorMessage=error})
  }

}
