import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../services/reqres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;

  constructor(private reqresService: ReqresService, private router: Router) {
  }

  ngOnInit(): void {
  }

  autofill() {
    this.email = "eve.holt@reqres.in";
    this.password = "cityslicka";
  }

  login() {
    this.reqresService.login(this.email, this.password).subscribe(response => {
      let token: String = JSON.parse(JSON.stringify(response)).token;
      console.log(token);
      if (token) {
        this.router.navigateByUrl('/empleados');
      }
    });
    this.error = "Los datos introducidos no son correctos";
  }

}
