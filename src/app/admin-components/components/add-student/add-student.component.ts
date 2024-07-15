import { Component,OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  alert:boolean=false //object creation for alert message
  showSignup=false
  
  constructor(private services:ServicesComponentsService){}
  addStudent= new FormGroup({ //form group of objects
  name:new FormControl(''),
  college:new FormControl(''),
  roll:new FormControl(''),
  qualification:new FormControl(''),
  course:new FormControl(''),
  year:new FormControl(''),
  certificate:new FormControl(''),
  })
  ngOnInit(): void {
      
  }
  CollectStudent(){ //call function to service class
    this.services.saveStudent(this.addStudent.value).subscribe((result)=>{
      this.alert=true //message after successfully submit
    })
    this.addStudent.reset({})  //to clear form after submit
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

