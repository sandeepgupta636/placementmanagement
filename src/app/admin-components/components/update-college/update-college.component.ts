import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesComponentsService } from '../../services-components.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-college',
  templateUrl: './update-college.component.html',
  styleUrls: ['./update-college.component.css']
})
export class UpdateCollegeComponent implements OnInit {
  editCollege= new FormGroup({ 
    name:new FormControl(''),
    admin:new FormControl(''),
    location:new FormControl(''),
    })
    alert:boolean=false
    constructor(private router:ActivatedRoute,private services:ServicesComponentsService){}
    ngOnInit(): void {
      this.services.getCurrentCollege(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
        console.warn(result);
        this.editCollege= new FormGroup({ //form group of objects
          name:new FormControl(result['name']),
          admin:new FormControl(result['admin']),
          location:new FormControl(result['location']),
         
          })
         

        
      })
    
      
        
    }
    collectData(){
      this.services.updateCollege(this.router.snapshot.paramMap.get('id'),this.editCollege.value).subscribe((result:any)=>{
        console.warn("result",result);
        this.alert=true
        
      })
    }

    closeAlert(){  //to close alert message
      this.alert=false

}
}
