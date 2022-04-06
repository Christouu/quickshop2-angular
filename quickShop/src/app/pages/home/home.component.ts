import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = [
    {
      imageSrc: 'assets/registerImg.jpg',
      imageAlt: 'QUICK - Gevgi',
    },
    {
      imageSrc: 'assets/snimkaForInfoComponent.jpg',
      imageAlt: 'QUICK - Konstantin Velichkov',
    },
    {
      imageSrc: 'assets/imgSlider1.jpg',
      imageAlt: 'QUICK - Zapaden park',
    },
    {
      imageSrc: 'assets/imgSlider2.jpg',
      imageAlt: 'QUICK - Zapaden park',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
