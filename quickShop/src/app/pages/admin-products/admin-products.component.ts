import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from 'src/app/components/add-product/add-product.component';
import { AddProductService } from 'src/app/shared/add-product.service';
import { UpdateProductComponent } from 'src/app/components/update-product/update-product.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'image',
    'description',
    'categories',
    'price',
    'quantity',
    'onSale',
    'actions',
  ];
  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  //@ts-ignore
  products: MatTableDataSource<any>;
  searchKey: string = '';

  constructor(
    public http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private productService: AddProductService
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/api/product?sort=true')
      .subscribe((productsData: any) => {
        this.products = new MatTableDataSource(productsData);
        this.products.sort = this.sort;
      });
  }

  onEdit(row: any) {
    row.$key = true;
    const { createdAt, updatedAt, __v, ...otherInfo } = row;
    this.productService.populateForm(otherInfo);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(UpdateProductComponent, dialogConfig);
  }
  onDelete(key: any) {
    //@ts-ignore
    const user: any = localStorage.getItem('token');
    const TOKEN = JSON.parse(user).accessToken;

    if (confirm('Are you sure to delete this record ?')) {
      this.http
        .delete(`http://localhost:5000/api/product/${key}`, {
          headers: { token: 'Bearer ' + TOKEN },
        })
        .subscribe((product) => {
          alert(product);
          // this.products.data.filter((p) => {
          //   p._id !== key;
          // });
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
    this.dialog.open(AddProductComponent, dialogConfig);
  }
}
