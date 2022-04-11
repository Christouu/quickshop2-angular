import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-small',
  templateUrl: './widget-small.component.html',
  styleUrls: ['./widget-small.component.scss'],
})
export class WidgetSmallComponent implements OnInit {
  latestUsers: any = [];
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/user?new=true')
      .subscribe((users) => {
        this.latestUsers = users;
      });
  }
}
