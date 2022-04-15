import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductService } from 'src/app/shared/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(
    public productService: AddProductService,
    //@ts-ignore
    private dialogRef: MatDialogRef,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onClear() {
    this.productService.form.reset();
    this.productService.initializeFormGroup();
  }

  onSubmit() {
    const user: any = localStorage.getItem('token');
    const TOKEN = JSON.parse(user).accessToken;

    if (this.productService.form.valid) {
      console.log(this.productService.form.value);

      const { $key, quantity, price, categories, description, ...other } =
        this.productService.form.value;

      const priceNumber = Number(price);
      const arrCategories = [];
      arrCategories.push(categories);
      const arrDescription = [];
      arrDescription.push(description);

      const quantityNumber = Number(quantity);

      this.http
        .post(
          'http://localhost:5000/api/product/',
          {
            ...other,
            price: priceNumber,
            quantity: quantityNumber,
            categories: arrCategories,
            description: arrDescription,
          },
          { headers: { token: 'Bearer ' + TOKEN } }
        )
        .subscribe((p) => {
          console.log(p);
        });
      this.productService.form.reset();
      this.onClose();
      this.reloadComponent();
      alert('Product added!!');
    }
  }

  onClose() {
    this.productService.form.reset();
    this.productService.initializeFormGroup();
    this.dialogRef.close();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
