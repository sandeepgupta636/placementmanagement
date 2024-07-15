import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesComponentsService } from '../../services-components.service';

@Component({
  selector: 'app-update-placement',
  templateUrl: './update-placement.component.html',
  styleUrls: ['./update-placement.component.css']
})
export class UpdatePlacementComponent implements OnInit {
  editPlacement= new FormGroup({ 
    name:new FormControl(''),
    college:new FormControl(''),
    date:new FormControl(''),
    qaulification:new FormControl(''),
    year:new FormControl(''),
    })
    alert:boolean=false
    constructor(private router:ActivatedRoute,private services:ServicesComponentsService){}
    ngOnInit(): void {
      this.services.getCurrentPlacement(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
        console.warn(result);
        this.editPlacement= new FormGroup({ //form group of objects
          name:new FormControl(result['name']),
          college:new FormControl(result['college']),
          date:new FormControl(result['date']),
          qaulification:new FormControl(result['qaulification']),
          year:new FormControl(result['year']),
         
          })
         

        
      })
    
      
        
    }
    collectData(){
      this.services.updatePlacement(this.router.snapshot.paramMap.get('id'),this.editPlacement.value).subscribe((result:any)=>{
        console.warn("result",result);
        this.alert=true
        
      })
    }

    closeAlert(){  //to close alert message
      this.alert=false

}
}
