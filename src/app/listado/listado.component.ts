import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona';
import { DataService } from '../data.service';
import { ReqresService } from '../services/reqres.service';
import { Singleuser } from '../modelo/singleuser';
import { Listusers } from '../modelo/listusers';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: Array<Persona>;
  dataService: DataService;
  personas2: Array<Persona>;

  constructor(dataService: DataService, reqresService: ReqresService) {
    this.dataService = dataService;
    this.personas = dataService.getPersonas();
    reqresService.getUsuarios().subscribe((response) => {
      this.personas2 = JSON.parse(JSON.stringify(response)).data;
      console.log(this.personas2);
    });
  }

  ngOnInit(): void {
    console.log("Se ha inicializado el listado");
  }

  addPersona(values): void {
    console.log(values);
    this.personas = this.dataService.addPersona(new Persona(values.id, values.email, values.first_name, values.last_name, values.avatar));
  }

}
