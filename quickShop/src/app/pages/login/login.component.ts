import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error = false;

  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit(): void {}

  loginHandler(data: any) {
    this.http
      .post(
        'http://localhost:5000/api/auth/login',
        {
          ...data,
        },
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .subscribe((user) => {
        if (!user) {
          this.error = true;
          return alert('Coudlnt log in');
        }
        alert('logged in');
        localStorage.setItem('token', JSON.stringify(user));
        this.router.navigate(['/']);
      });
  }
}
