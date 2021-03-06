import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

interface Product {
  allKinds: boolean;
  categories: string[];
  description: string[];
  image: string;
  onSale: boolean;
  price: number;
  quantity: number;
  title: string;
  _id: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id = '';
  product: Product = {
    allKinds: false,
    categories: [],
    description: [],
    image: '',
    onSale: false,
    price: 0,
    quantity: 0,
    title: '',
    _id: '',
  };
  added = 0;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http
      .get<Product>(`http://localhost:5000/api/product/find/${id}`)
      .subscribe((product) => {
        this.product = product;
      });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.added++;
  }
}
