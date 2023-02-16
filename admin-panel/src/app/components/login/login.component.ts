import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
  ]);

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  submitLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: error => alert(error.message),
    });
  }
}
