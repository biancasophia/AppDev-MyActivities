import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
email: string = '';
password: string = '';
retypePassword: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  signUp() {
    this.authService.signUp (this.email, this.password, this.retypePassword);
    this.email = '';
    this.password = '';
    this.retypePassword = '';
  }
}
