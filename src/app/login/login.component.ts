import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false; 

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
         // Show loader during login process
         this.loading = true;

      // Simulate an API call (replace with real authentication)
      setTimeout(() => {
      if (username === 'voss-solutions' && password === 'supersecretpassword') {
        localStorage.setItem('user', JSON.stringify({ username })); // Save user to localStorage
        this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
        this.router.navigate(['/movies']);
      } else {
        this.snackBar.open('Invalid credentials.', 'Close', { duration: 3000 });
      }
      this.loading = false;
    }, 2000); // Simulate a delay of 2 seconds
    } else {
      this.snackBar.open('Please fill out the form correctly.', 'Close', { duration: 3000 });
    }
  }
  
  
}
