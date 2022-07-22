import { Component, OnInit, Input } from '@angular/core';
import { INavbarButton } from 'src/app/@types/header';

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
  @Input() navButtons!: INavbarButton[];

  ngOnInit(): void {
    if (this.position) {
      document.getElementById('header')!.style.position = this.position;
    }
    this.handleOpenMenu();
  }

  handleOpenMenu(): void {
    this.openMenu = !this.openMenu;
    if (this.openMenu === true) {
      document.getElementById('menu')!.style.display = 'flex';
      setTimeout(() => {
        document.getElementById('menu')!.style.transform = 'translateY(0)';
      }, 10);
    } else {
      document.getElementById('menu')!.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        document.getElementById('menu')!.style.display = 'none';
      }, 1000);
    }
  }
}
