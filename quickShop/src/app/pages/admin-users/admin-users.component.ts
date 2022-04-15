import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/components/add-user/add-user.component';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { UpdateUserComponent } from 'src/app/components/update-user/update-user.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'username',
    'email',
    'isAdmin',
    'created',
    'actions',
  ];
  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  //@ts-ignore
  products: MatTableDataSource<any>;
  searchKey = '';
  spinner = false;

  constructor(
    public http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.spinner = true;
    this.http.get('http://localhost:5000/api/user').subscribe((users: any) => {
      this.products = new MatTableDataSource(users);
      this.products.sort = this.sort;
      this.spinner = false;
    });
  }

  onEdit(row: any) {
    row.$key = true;
    const { createdAt, updatedAt, __v, ...otherInfo } = row;
    this.userService.populateForm(otherInfo);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(UpdateUserComponent, dialogConfig);
  }
  onDelete(key: any) {
    //@ts-ignore
    const user: any = localStorage.getItem('token');
    const TOKEN = JSON.parse(user).accessToken;

    if (confirm('Are you sure to delete this record ?')) {
      this.http
        .delete(`http://localhost:5000/api/user/${key}`, {
          headers: { token: 'Bearer ' + TOKEN },
        })
        .subscribe((product) => {
          alert(product);
          this.reloadComponent();
        });
    }
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.products.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AddUserComponent, dialogConfig);
  }
}
