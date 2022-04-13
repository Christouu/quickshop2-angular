import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-products-sale',
  templateUrl: './products-sale.component.html',
  styleUrls: ['./products-sale.component.scss'],
})
export class ProductsSaleComponent implements OnInit {
  products: any = [];
  totalLength: any;
  page: number = 1;
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/product/onSale')
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
