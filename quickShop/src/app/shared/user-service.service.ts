import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    isAdmin: new FormControl(false, [Validators.required]),
    _id: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      username: '',
      email: '',
      password: '',
      isAdmin: false,

      _id: '',
    });
  }

  populateForm(employee: any) {
    this.form.setValue(employee);
  }
}
