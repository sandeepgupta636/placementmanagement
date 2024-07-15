import { Component, OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  constructor(private services:ServicesComponentsService){}
  collection:any=[]

  ngOnInit():void{

    this.list();
}
deleteCustomer(id:any){
  console.warn(this.collection);
  this.collection.splice(id-1,1)
   this.services.deleteCustomer(id).subscribe((result)=>
   {
    if(result){
      this.list();
    }
    
    
    
   })
    
  }
  list(){
    this.services.getlist().subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    } )
  }

}
