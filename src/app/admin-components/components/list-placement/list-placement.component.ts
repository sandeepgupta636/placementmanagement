import { Component,OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';

@Component({
  selector: 'app-list-placement',
  templateUrl: './list-placement.component.html',
  styleUrls: ['./list-placement.component.css']
})
export class ListPlacementComponent implements OnInit {
  constructor(private services:ServicesComponentsService){}
  collection:any=[]

  ngOnInit():void{

    this.list();
}
deletePlacement(id:any){
  console.warn(this.collection);
  this.collection.splice(id-1,1)
   this.services.deletePlacement(id).subscribe((result)=>
   {
    if(result){
      this.list();
    }
    
    
    
   })
    
  }
  list(){
    this.services.getlistPlacement().subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    } )
  }
 

}

