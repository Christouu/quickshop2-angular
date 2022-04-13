import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

interface Product {
  _id: string;
  image: string;
  title: string;
  description: string[];
  price: number;
  quantity: number;
  categories: string[];
  allKinds: boolean;
  onSale: boolean;
}

@Component({
  selector: 'app-product-homepage',
  templateUrl: './product-homepage.component.html',
  styleUrls: ['./product-homepage.component.scss'],
})
export class ProductHomepageComponent implements OnInit {
  @Input() input: Product = {
    _id: '',
    image: '',
    title: '',
    description: [],
    price: 0,
    quantity: 0,
    categories: [],
    allKinds: false,
    onSale: false,
  };

  public productList = this.input;

  constructor(public http: HttpClient, public cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.input);
  }
}
