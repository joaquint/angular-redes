import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../services/reqres.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private reqresService: ReqresService) {
  }

  ngOnInit(): void {
  }

  createUser(values): void {
    console.log(values);
    this.reqresService.createUser(values.name, values.job);
  }

}
