import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Singleuser } from '../modelo/singleuser';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  persona: Persona;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    //this.http.post('https://reqres.in/api/login', '{ "email": "' + email + '", "password": "' + password + '" }').subscribe(datos => {console.log(datos);})
    //this.http.post('https://reqres.in/api/login', '{ "email": "eve.holt@reqres.in", "password": "cityslicka" }').subscribe(datos => {console.log(datos);})
    //this.http.post('https://reqres.in/api/users', '{ "name": "morpheus", "job": "leader" }').subscribe(datos => {console.log(datos);})

    let body: string = '{ "email": "' + email + '", "password": "' + password + '" }';

    this.http.post('https://reqres.in/api/login', JSON.parse(body)).subscribe(data => { console.log("-------POST-------->" + JSON.stringify(data)) });
  }

  getUsuario(id: string) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

  getUsuarios() {
    return this.http.get('https://reqres.in/api/users?page=1');
  }

}