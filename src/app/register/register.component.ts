import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//form component with fields for user details
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null
  };
  //sets bools for validation of registering process
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  //when submit button is pressed, uses the auth service and sets bools to show if registration is valid
  //then proceeds to next page or gives an error based on outcome
  onSubmit(): void {
    const { name, email, password } = this.form;
    this.authService.register(name, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
