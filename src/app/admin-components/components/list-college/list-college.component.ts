import { Component,OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';

@Component({
  selector: 'app-list-college',
  templateUrl: './list-college.component.html',
  styleUrls: ['./list-college.component.css']
})
export class ListCollegeComponent implements OnInit {
  constructor(private services:ServicesComponentsService){}
  collection:any=[]

  ngOnInit():void{

    this.list();
}
deleteCollege(id:any){
  console.warn(this.collection);
  this.collection.splice(id-1,1)
   this.services.deleteCollege(id).subscribe((result)=>
   {
    if(result){
      this.list();
    }
    
    
    
   })
    
  }
  list(){
    this.services.getlistCollege().subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    } )
  }
 

}

