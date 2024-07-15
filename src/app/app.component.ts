import { Component, OnInit } from '@angular/core';
import { PlacementService } from './placement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.placementService.initStorageListener();
    this.verifySession();
  }
  title = 'placement-management';
 constructor(private placementService:PlacementService,private router:Router) {
  localStorage.setItem('token', "false")
  }
  verifySession() {
    this.placementService.verifySession().subscribe(
      isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['login']);
        }
      },
      error => {
        console.error('Session verification failed', error);
        this.router.navigate(['login']);
      }
    );
  }
  
}
  