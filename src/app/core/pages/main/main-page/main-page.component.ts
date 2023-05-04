import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  // just for example

  public ngOnInit(): void {
    this.httpClient.get('posts').subscribe((posts) => console.log(posts));
  }
}
