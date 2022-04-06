import { Component, Input, OnInit } from '@angular/core';

interface Product {
  id: number;
  img: string;
}

@Component({
  selector: 'app-product-homepage',
  templateUrl: './product-homepage.component.html',
  styleUrls: ['./product-homepage.component.scss'],
})
export class ProductHomepageComponent implements OnInit {
  @Input() data: Product = { id: 0, img: '' };

  constructor() {}

  ngOnInit(): void {}
}
