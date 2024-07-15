import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../placement.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  constructor(private placement:PlacementService,private route:Router, private  formbuilder:FormBuilder, private http:HttpClient){
  }
  showSignup=false
  public userSignUp!:FormGroup
  public userLogin!:FormGroup
  


  ngOnInit(): void {

    // this.reloadseller()
    this.userSignUp=this.formbuilder.group({
      name:[],
      password:[],
      type:[]
    })
    this.userLogin=this.formbuilder.group({
      name:[],
      password:[],
    })
  }
  
  SignUp():void{
    this.placement.userSignUp(this.userSignUp.value).subscribe((result)=>{
      if(result){
        this.route.navigate(['login'])
      }

    })
    alert("signup success")
  }
  login(){
    this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.name===this.userLogin.value.name && a.password ===this.userLogin.value.password
      });
      if(user){
        
        alert("login success");
        
        localStorage.setItem('token', "true")
        this.userLogin.reset();
        
        this.route.navigate(['student-component']);
       
      }
      else{
        localStorage.setItem('token', "false")
        alert("failed")
      }

    },error=>{
      alert("something  went wrong")
    })

  }


  openSignUp(){ //  redirect to Admin-Signup Page 
    this.showSignup=true
  }

  openLogin(){  // redirect to Admin-Login Page
    this.showSignup=false

  }


}
