import { Component,OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  constructor(private services:ServicesComponentsService){}
  collection:any=[]

  ngOnInit():void{

    this.list();
}
deleteStudent(id:any){
  console.warn(this.collection);
  this.collection.splice(id-1,1)
   this.services.deleteStudent(id).subscribe((result)=>
   {
    if(result){
      this.list();
    }
    
    
    
   })
    
  }
  list(){
    this.services.getlistStudent().subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    } )
  }
 

}


