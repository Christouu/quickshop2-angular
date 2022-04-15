import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  constructor() {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl([''], [Validators.required]),
    categories: new FormControl([''], [Validators.required]),
    quantity: new FormControl(0, Validators.required),
    price: new FormControl(0, Validators.required),
    onSale: new FormControl(false),
    allKinds: new FormControl(false),
    _id: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      title: '',
      image: '',
      description: [''],
      categories: [''],
      quantity: 0,
      price: 0,
      onSale: false,
      allKinds: false,
      _id: '',
    });
  }

  populateForm(employee: any) {
    this.form.setValue(employee);
  }
}
