import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'username',
    'email',
    'isAdmin',
    'created',
    'actions',
  ];
  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  //@ts-ignore
  products: MatTableDataSource<any>;

  spinner = false;

  constructor(public http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.spinner = true;
    this.http.get('http://localhost:5000/api/user').subscribe((users: any) => {
      this.products = new MatTableDataSource(users);
      this.products.sort = this.sort;
      this.spinner = false;
    });
  }

  onEdit(row: any) {}
  onDelete(key: any) {
    //@ts-ignore
    const user: any = localStorage.getItem('token');
    const TOKEN = JSON.parse(user).accessToken;

    if (confirm('Are you sure to delete this record ?')) {
      this.http
        .delete(`http://localhost:5000/api/user/${key}`, {
          headers: { token: 'Bearer ' + TOKEN },
        })
        .subscribe((product) => {
          alert(product);
          this.reloadComponent();
        });
    }
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
