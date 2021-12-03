import { Component, OnInit } from '@angular/core';
import {AuthResponseData, AuthService} from "./auth.service";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isSignup = true;
  error = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitch() {
    this.isSignup = !this.isSignup;
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs = new Observable<AuthResponseData>();

    if(this.isSignup) {
      authObs = this.authService.signUp(email, password)
    } else {
      authObs = this.authService.signIn(email, password)
    }

    authObs.subscribe(() => {
      this.router.navigate(['base-component/guidebooks'])
    }, errorMessage => {
      this.error = errorMessage;
    })
  }

}
