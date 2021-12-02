import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }

  signUp() {
    console.log('sign up')
  }

  signIn() {
    console.log('sign in')
  }
}
