import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesComponentsService } from '../../services-components.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-certificate',
  templateUrl: './update-certificate.component.html',
  styleUrls: ['./update-certificate.component.css']
})
export class UpdateCertificateComponent implements OnInit {
  editCertificate= new FormGroup({ 
    year:new FormControl(''),
    college:new FormControl(''),
    })
    alert:boolean=false
    constructor(private router:ActivatedRoute,private services:ServicesComponentsService){}
    ngOnInit(): void {
      this.services.getCurrentCertificate(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
        console.warn(result);
        this.editCertificate= new FormGroup({ //form group of objects
          year:new FormControl(result['year']),
          college:new FormControl(result['college']),
         
          })
         

        
      })
    
      
        
    }
    collectData(){
      this.services.updateCertificate(this.router.snapshot.paramMap.get('id'),this.editCertificate.value).subscribe((result:any)=>{
        console.warn("result",result);
        this.alert=true
        
      })
    }

    closeAlert()//to close alert message
    {  
    this.alert=false

}
}
