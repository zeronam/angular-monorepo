import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'angular-monorepo-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})

export class AuthFormComponent {

  loginObj: Login;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('https://nodejs-todo-9emm.onrender.com/auth/login', this.loginForm.value).subscribe((res:any)=>{
      if(res.token) {
        alert("Login Success");
        localStorage.setItem('user', res.token);
        this.router.navigateByUrl('/product-list');
      } else {
        alert(res.message)
      }
    })
  }
}

export class Login { 
    email: string;
    password: string;
    constructor() {
      this.email = '';
      this.password = '';
    } 
}