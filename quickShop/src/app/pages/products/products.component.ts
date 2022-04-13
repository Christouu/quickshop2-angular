import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  totalLength: any;
  page: number = 1;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/product/')
      .subscribe((products) => {
        this.products = products;
        this.totalLength = this.products.length;
      });
  }

  getFilteredData(evt: any) {
    setTimeout(() => {
      this.http
        .get(`http://localhost:5000/api/product?category=${evt.target.value}`)
        .subscribe((products) => {
          this.products = products;
        });
    }, 1000);
  }
}
