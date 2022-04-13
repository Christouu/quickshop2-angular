import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/product?new=true')
      .subscribe((products) => {
        this.products = products;
      });
  }
}
