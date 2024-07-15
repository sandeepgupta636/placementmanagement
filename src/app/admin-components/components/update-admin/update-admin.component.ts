import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ServicesComponentsService } from '../../services-components.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  editAdmin= new FormGroup({ 
    name:new FormControl(''),
    password:new FormControl(''),
    })
    alert:boolean=false
    constructor(private router:ActivatedRoute,private services:ServicesComponentsService){}
    ngOnInit(): void {
      this.services.getCurrentAdmin(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
        console.warn(result);
        this.editAdmin= new FormGroup({ //form group of objects
          name:new FormControl(result['name']),
          password:new FormControl(result['password']),
         
          })
         

        
      })
    
      
        
    }
    collectData(){
      this.services.updateCustomer(this.router.snapshot.paramMap.get('id'),this.editAdmin.value).subscribe((result:any)=>{
        console.warn("result",result);
        this.alert=true //message after successfully submit
        
      })
    }

    closeAlert(){  //to close alert message
      this.alert=false
     }

}
