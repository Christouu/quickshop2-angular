import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-limit',
  templateUrl: './products-limit.component.html',
  styleUrls: ['./products-limit.component.scss'],
})
export class ProductsLimitComponent implements OnInit {
  products = [
    {
      id: 1,
      img: 'https://cdncloudcart.com/16474/products/images/1442/jameson-original-200ml-image_60508873ecb85.webp?1615890551',
    },
    {
      id: 2,
      img: 'https://vinaritrade.com/UserFiles/products/484E1F36-6C6A-1E07-9110-4E103C80F4C7.jpg?cache&q=100&w=1024',
    },
    {
      id: 3,
      img: 'https://pingo.bg/Content/products/588/800-800.jpg',
    },
    {
      id: 4,
      img: 'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png',
    },
    {
      id: 5,
      img: 'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
    },
    {
      id: 6,
      img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png',
    },
    {
      id: 7,
      img: 'https://vinaritrade.com/UserFiles/products/EC6F5159-0DDD-BB48-175D-C3EF7DF2A67C.png?cache&q=100&w=1024',
    },
    {
      id: 8,
      img: 'https://www.superbagplovdiv.bg/media/99/16917.png',
    },
    {
      id: 9,
      img: 'https://www.superbagplovdiv.bg/media/99/16917.png',
    },
    {
      id: 10,
      img: 'https://www.superbagplovdiv.bg/media/99/16917.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
