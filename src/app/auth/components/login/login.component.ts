import { Router } from '@angular/router';
import { User } from './../../../shared/models/index';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router  
  ){}

  ngOnInit(): void {
    
  }

  login(username, password) {
    this.userService.login({
      username,
      password
    }).subscribe(user => {
      this.userService.saveUser(user);
      this.router.navigate(['home']);
    });
  }

}
