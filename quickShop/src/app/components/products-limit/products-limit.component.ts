import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Product {
  _id: string;
  image: string;
}

@Component({
  selector: 'app-products-limit',
  templateUrl: './products-limit.component.html',
  styleUrls: ['./products-limit.component.scss'],
})
export class ProductsLimitComponent implements OnInit {
  products: any = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('http://localhost:5000/api/product/onSale?new=true')
      .subscribe((products) => {
        this.products = products;
      });
  }
}
