import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../placement.service';
import { signUp } from '../data-type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data, error } from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{
  errorMessage: string='';
  constructor(private placement:PlacementService,private route:Router, private  formbuilder:FormBuilder, private http:HttpClient){
  }
  
  alert:boolean=false //object creation for alert message
  showSignup=false
  public adminSignup!:FormGroup
  public adminLogin!:FormGroup



  


  ngOnInit(): void {

    // this.reloadseller()
    this.adminSignup=this.formbuilder.group({
      name:[],
      password:[]
    })
    this.adminLogin=this.formbuilder.group({
      name:[],
      password:[]
    })
  }
  
  signUp():void{
    this.placement.signUp(this.adminSignup.value).subscribe((result)=>{
      if(result){
        this.route.navigate(['login'])
      }

    })
    alert("signup success")
  }
  



  // login(){
  //   this.http.get<any>("http://localhost:3000/admin").subscribe(res=>{
  //     const admin= res.find((a:any)=>{
  //       return a.name===this.adminLogin.value.name && a.password ===this.adminLogin.value.password
  //     });
  //     if(admin){
  //       // localStorage.setItem('token', "true")
  //       this.adminLogin.reset();
        
  //       this.route.navigate(['admin-components']);
       
  //     }
  //     else{
  //       // localStorage.setItem('token', "false")
  //       alert("failed")
  //     }

  //   },error=>{
  //     alert("something  went wrong")
  //   })

  // }
  // reloadseller(){
  //   localStorage.setItem('token', "true")
  //   this.route.navigate(['admin-dashboard']);
  //  }


  // login(): void {
  //   if (this.adminLogin.valid) {
  //     const credentials = this.adminLogin.value;
  //     this.placement.login(credentials).subscribe(
  //       (res) => {
  //         console.log('Login successful');
  //       },
  //       (error) => {
  //         console.error('Login error', error);
  //       }
  //     );
  //   }
  // }

  login(): void {
    if (this.adminLogin.valid) {
      const credentials = this.adminLogin.value;
      this.placement.login(credentials).subscribe({
        next: () => {
          console.log('Login successful');
          if (this.placement.isLoggedIn()) {
            this.route.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Invalid credentials or another user is already logged in.';
          }
        },
        error: (err) => {
          this.errorMessage = 'Login failed';
          console.error('Login error', err);
        }
      });
    }
  }

  openSignUp(){ //  redirect to Admin-Signup Page 
    this.showSignup=true
  }
  openLogin(){  // redirect to Admin-Login Page
    this.showSignup=false

  }
  closeAlert(){  //to close alert message
    this.alert=false
   }
  }