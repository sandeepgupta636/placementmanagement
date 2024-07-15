import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { ServicesComponentsService } from '../../services-components.service';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit{
  alert:boolean=false //object creation for alert message

  showSignup=false
  
  constructor(private services:ServicesComponentsService){}
  addAdmin= new FormGroup({ //form group of objects
  name:new FormControl(''),
  password:new FormControl(''),
  })
  
  ngOnInit(): void {
      
  }
  CollectAdmin(){ //call function to service class
    this.services.saveAdmin(this.addAdmin.value).subscribe((result)=>{
      this.alert=true //message after successfully submit
    })
    this.addAdmin.reset({})  //to clear form after submit
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


