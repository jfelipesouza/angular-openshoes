import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() bgColor: string = '';
  constructor() {}

  ngOnInit(): void {
    console.log('');
  }
}
