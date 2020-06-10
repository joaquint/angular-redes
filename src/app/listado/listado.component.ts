import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona';
import { DataService } from '../data.service';
import { ReqresService } from '../services/reqres.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: Array<Persona>;
  dataService: DataService;
  personas2: Array<Persona>;

  constructor(dataService: DataService, private reqresService: ReqresService) {
    this.dataService = dataService;
    this.personas = dataService.getPersonas();
    reqresService.getUsers().subscribe((response) => {
      this.personas2 = JSON.parse(JSON.stringify(response)).data;
      console.log(this.personas2);
    });
  }

  ngOnInit(): void {
    console.log("Se ha inicializado el listado");
  }

  deleteUser(id: string) {
    console.log("deleteUser: " + id);
    this.reqresService.deleteUser(id);
  }

}
