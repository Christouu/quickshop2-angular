import { Component, Input, OnInit } from '@angular/core';

interface Product {
  _id: string;
  image: string;
  title: string;
}

@Component({
  selector: 'app-product-homepage',
  templateUrl: './product-homepage.component.html',
  styleUrls: ['./product-homepage.component.scss'],
})
export class ProductHomepageComponent implements OnInit {
  @Input() input: Product = { _id: '', image: '', title: '' };

  constructor() {}

  ngOnInit(): void {}
}
