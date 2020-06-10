import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ReqresService } from '../services/reqres.service';
import { Persona } from '../modelo/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private dataService: DataService, private reqresService: ReqresService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createUser(values): void {
    console.log(values);
    this.reqresService.createUser(values.name, values.job);
    //this.router.navigateByUrl('/empleados');
  }

}
