import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [UserService]
})
export class UserComponent implements OnInit {
  data : any;
  user : {name : string};
  isLoggedIn : boolean = false;

  constructor(private us : UserService) { 
    
    // this.user = this.us.user;
  }

  ngOnInit() {
    this.user = this.us.user;
    this.us.getDetails().then(data => this.data = data)
  }

}
