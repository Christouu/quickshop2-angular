import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductService } from 'src/app/shared/add-product.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  constructor(
    //@ts-ignore
    private dialogRef: MatDialogRef,
    private http: HttpClient,
    private router: Router,
    public userService: UserServiceService
  ) {}

  ngOnInit(): void {}

  onClear() {
    this.userService.form.reset();
    this.userService.initializeFormGroup();
  }

  onSubmit() {
    const user: any = localStorage.getItem('token');
    const TOKEN = JSON.parse(user).accessToken;

    if (this.userService.form.valid) {
      console.log(this.userService.form.value);

      const { $key, _id, ...other } = this.userService.form.value;

      this.http
        .put(
          `http://localhost:5000/api/user/${_id}`,
          {
            ...other,
          },
          { headers: { token: 'Bearer ' + TOKEN } }
        )
        .subscribe((p) => {});
      this.userService.form.reset();
      this.onClose();
      this.reloadComponent();
      alert('Product updated!!');
    }
  }

  onClose() {
    this.userService.form.reset();
    this.userService.initializeFormGroup();
    this.dialogRef.close();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
