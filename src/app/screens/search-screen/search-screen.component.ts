import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css'],
})
export class SearchScreenComponent implements OnInit {
  navButtons: { name: string; link: string; normal: boolean }[] = [
    { name: 'SingIn', link: '/singIn', normal: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
