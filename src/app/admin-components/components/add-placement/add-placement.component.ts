import { Component,OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-placement',
  templateUrl: './add-placement.component.html',
  styleUrls: ['./add-placement.component.css']
})
export class AddPlacementComponent implements OnInit {
  alert:boolean=false //object creation for alert message
  showSignup=false
  
  constructor(private services:ServicesComponentsService){}
  addPlacement= new FormGroup({ //form group of objects
  name:new FormControl(''),
  college:new FormControl(''),
  date:new FormControl(''),
  qualification:new FormControl(''),
  year:new FormControl(''),
  })
  ngOnInit(): void {
      
  }
  CollectPlacement(){ //call function to service class
    this.services.savePlacement(this.addPlacement.value).subscribe((result)=>{
      this.alert=true //message after successfully submit
    })
    this.addPlacement.reset({})  //to clear form after submit
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

