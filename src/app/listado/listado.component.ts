import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona';
import { ReqresService } from '../services/reqres.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: Array<Persona>;

  constructor(private reqresService: ReqresService) {
    reqresService.getUsers().subscribe((response) => {
      this.personas = JSON.parse(JSON.stringify(response)).data;
      console.log(this.personas);
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
