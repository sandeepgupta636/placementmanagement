import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesComponentsService } from '../../services-components.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  editStudent= new FormGroup({ 
    name:new FormControl(''),
    college:new FormControl(''),
    roll:new FormControl(''),
    qaulification:new FormControl(''),
    course:new FormControl(''),
    year:new FormControl(''),
    certificate:new FormControl(''),
    })
    alert:boolean=false
    constructor(private router:ActivatedRoute,private services:ServicesComponentsService){}
    ngOnInit(): void {
      this.services.getCurrentStudent(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
        console.warn(result);
        this.editStudent= new FormGroup({ //form group of objects
          name:new FormControl(result['name']),
          college:new FormControl(result['college']),
          roll:new FormControl(result['roll']),
          qaulification:new FormControl(result['qaulification']),
          course:new FormControl(result['course']),
          year:new FormControl(result['year']),
          certificate:new FormControl(result['certificate']),
         
          })
         

        
      })
    
      
        
    }
    collectData(){
      this.services.updateStudent(this.router.snapshot.paramMap.get('id'),this.editStudent.value).subscribe((result:any)=>{
        console.warn("result",result);
        this.alert=true
        
      })
    }

    closeAlert(){  //to close alert message
      this.alert=false

}
}

