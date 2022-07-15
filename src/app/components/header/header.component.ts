import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() position?: string;
  @Input() navButton?: {}[];

  ngOnInit(): void {
    if (this.position) {
      document.getElementById('header')!.style.position = this.position;
    }
  }
}
