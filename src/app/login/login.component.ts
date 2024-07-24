import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  


  constructor() {}
  showSignup=false

  // signIn() {
  //   // Implement your sign-in logic here
  //   console.log('Email:');
  //   console.log('Password:');
  //   // Redirect to the appropriate page after successful sign-in
  
  // }

  // signUp() {
  //   // Implement your sign-up logic here
    
  // }
  openSignUp(){ //  redirect to Admin-Signup Page 
    this.showSignup=true
  }
  openLogin(){  // redirect to Admin-Login Page
    this.showSignup=false

  }

}
