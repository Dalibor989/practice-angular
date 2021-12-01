import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isSignup = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitch() {
    this.isSignup = !this.isSignup;
  }

  onSubmit(form: NgForm) {
    if(this.isSignup) {
      this.authService.signUp()
    } else {
      this.authService.signIn()
    }
  }

}
