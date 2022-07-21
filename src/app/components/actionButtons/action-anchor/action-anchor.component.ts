import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-anchor',
  templateUrl: './action-anchor.component.html',
  styleUrls: ['./action-anchor.component.css'],
})
export class ActionAnchorComponent implements OnInit {
  @Input() link!: string;
  @Input() bgColor!: string;
  @Input() value!: string;
  @Input() id!: string;

  constructor() {}

  ngOnInit(): void {
    let color: string;
    switch (this.bgColor) {
      case 'primary':
        color = `var(--${this.bgColor})`;
        document.getElementById(this.id)!.style.color = 'var(--text-light)';
        break;

      case 'secundary':
        color = `var(--${this.bgColor})`;
        document.getElementById(this.id)!.style.color = 'var(--text-light)';
        break;

      case 'primary-light':
        color = `var(--${this.bgColor})`;
        document.getElementById(this.id)!.style.color = 'var(--primary)';
        break;
      default:
        color = this.bgColor;
        break;
    }
    document.getElementById(this.id)!.style.borderRadius = 'var(--space-sm)';
    document.getElementById(this.id)!.style.backgroundColor = color;
  }
}
