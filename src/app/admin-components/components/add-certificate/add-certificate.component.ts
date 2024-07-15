import { Component,OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {
  alert:boolean=false //object creation for alert message
  showSignup=false
  
  constructor(private services:ServicesComponentsService){}
  addCertificate= new FormGroup({ //form group of objects
  year:new FormControl(''),
  college:new FormControl(''),
  })
  ngOnInit(): void {
      
  }
  CollectCertificate(){ //call function to service class
    this.services.saveCertificate(this.addCertificate.value).subscribe((result)=>{
      this.alert=true //message after successfully submit
    })
    this.addCertificate.reset({})  //to clear form after submit
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

