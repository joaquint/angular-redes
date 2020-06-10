import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../services/reqres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private reqresService: ReqresService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(values): void {
    console.log(values);
    this.reqresService.login(values.email, values.password).subscribe(response => {
      let token: String = JSON.parse(JSON.stringify(response)).token;
      console.log(token);
      if (token) {
        this.router.navigateByUrl('/empleados');
      }
    });
  }

}
