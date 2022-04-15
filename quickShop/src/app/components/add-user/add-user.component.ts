import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
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

      const { $key, ...other } = this.userService.form.value;

      this.http
        .post(
          'http://localhost:5000/api/user/create',
          {
            ...other,
          },
          { headers: { token: 'Bearer ' + TOKEN } }
        )
        .subscribe((p) => {
          console.log(p);
        });
      this.userService.form.reset();
      this.onClose();
      this.reloadComponent();
      alert('User added!!');
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
