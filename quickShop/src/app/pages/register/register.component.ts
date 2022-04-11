import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit(): void {}

  registerHandler(data: any) {
    this.http
      .post(
        'http://localhost:5000/api/auth/register',
        {
          username: data.username,
          email: data.email,
          password: data.password,
        },
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .subscribe((user) => {
        alert('registered');
        this.router.navigate(['/login']);
      });
  }
}
