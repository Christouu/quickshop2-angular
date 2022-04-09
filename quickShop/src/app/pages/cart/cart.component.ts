import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: any = [];
  totalPrice: any = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.totalPrice = this.cartService.getTotalPrice();
      this.totalPrice = Math.round(this.totalPrice * 100) / 100;
    });
  }
}
