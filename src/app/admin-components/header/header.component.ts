import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacementService } from '../../placement.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private placement: PlacementService) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('token') && val.url.includes('seller')) {
          console.warn('admin area');
        } else {
          console.warn('outside admin');
        }
      }
    });
  }
  logout(): void {
    this.placement.logout();
  }
}
