import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'image',
    'description',
    'categories',
    'price',
    'quantity',
    'onSale',
    'actions',
  ];
  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  //@ts-ignore
  products: MatTableDataSource<any>;

  constructor(public http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/product/')
      .subscribe((productsData: any) => {
        this.products = new MatTableDataSource(productsData);
        this.products.sort = this.sort;
      });
  }

  onEdit(row: any) {}
  onDelete(key: any) {
    //@ts-ignore
    const user: any = localStorage.getItem('token');
    const TOKEN = JSON.parse(user).accessToken;

    if (confirm('Are you sure to delete this record ?')) {
      this.http
        .delete(`http://localhost:5000/api/product/${key}`, {
          headers: { token: 'Bearer ' + TOKEN },
        })
        .subscribe((product) => {
          alert(product);
          // this.products.data.filter((p) => {
          //   p._id !== key;
          // });
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
