import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = true;

  constructor() {}

  @Input() position?: string;
  @Input() showMobileMenu?: boolean;
  @Input() navButtons!: { name: string; link: string; normal: boolean }[];

  ngOnInit(): void {
    if (this.position) {
      document.getElementById('header')!.style.position = this.position;
    }
    this.handleOpenMenu();
  }

  handleOpenMenu(): void {
    this.openMenu = !this.openMenu;
    if (this.openMenu === true) {
      document.getElementById('menu')!.style.transform = 'translateY(0)';
    } else {
      document.getElementById('menu')!.style.transform = 'translateY(-100%)';
    }
  }
}
