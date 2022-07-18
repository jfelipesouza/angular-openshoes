import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  currentRoute: string = ''

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        (event: any) => {
          if (event instanceof NavigationStart) {
            this.currentRoute = event.url;
          }
        });
  }
  ngOnInit(): void {

  }
  handleOpenMenu() { }
}
