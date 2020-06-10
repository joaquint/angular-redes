import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../modelo/persona';
import { ReqresService } from '../services/reqres.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: string;
  persona: Persona;

  constructor(route: ActivatedRoute, reqresService: ReqresService) {
    this.id = route.snapshot.paramMap.get('id');
    reqresService.getUser(this.id).subscribe((response) => {
      this.persona = JSON.parse(JSON.stringify(response)).data;
      console.log(this.persona);
    });
  }

  ngOnInit(): void {
  }

}
