import { Component,OnInit } from '@angular/core';
import { ServicesComponentsService } from '../../services-components.service';

@Component({
  selector: 'app-list-certificate',
  templateUrl: './list-certificate.component.html',
  styleUrls: ['./list-certificate.component.css']
})
export class ListCertificateComponent implements OnInit {
  constructor(private services:ServicesComponentsService){}
  collection:any=[]

  ngOnInit():void{

    this.list();
}
deleteCertificate(id:any){
  console.warn(this.collection);
  this.collection.splice(id-1,1)
   this.services.deleteCertificate(id).subscribe((result)=>
   {
    if(result){
      this.list();
    }
    
    
    
   })
    
  }
  list(){
    this.services.getlistCertificate().subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    } )
  }
 

}
