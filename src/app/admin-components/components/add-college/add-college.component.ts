import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ServicesComponentsService } from '../../services-components.service';


@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {
  alert:boolean=false //object creation for alert message
  showSignup=false
  
  constructor(private services:ServicesComponentsService){}
  addCollege= new FormGroup({ //form group of objects
  name:new FormControl(''),
  admin:new FormControl(''),
  location:new FormControl(''),
  })
  ngOnInit(): void {
      
  }
  CollectCollege(){ //call function to service class
    this.services.saveCollege(this.addCollege.value).subscribe((result)=>{
      this.alert=true //message after successfully submit
    })
    this.addCollege.reset({})  //to clear form after submit
     }
     closeAlert(){  //to close alert message
      this.alert=false
     }
     openLogin(){  // redirect to Admin-Login Page
      this.showSignup=false
  
    }
    openSignUp(){ //  redirect to Admin-Signup Page 
      this.showSignup=true
    }

}
