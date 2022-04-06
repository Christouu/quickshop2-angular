import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-sale',
  templateUrl: './products-sale.component.html',
  styleUrls: ['./products-sale.component.scss'],
})
export class ProductsSaleComponent implements OnInit {
  products: any = [];
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/product/onSale')
      .subscribe((products) => {
        this.products = products;
        console.log(this.products);
      });
  }
}
