import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    this.http.post('https://reqres.in/api/login', JSON.parse(body)).subscribe(response => { console.log("-------POST-------->" + JSON.stringify(response)) });
  }

  createUser(name: string, job: string) {
    this.http.post('https://reqres.in/api/users', '{ "name": "' + name + '", "job": "' + job + '" }').subscribe(response => {console.log(response);})
  }

  deleteUser(id: string) {
    this.http.delete('https://reqres.in/api/users/' + id).subscribe(response => {console.log(response);})
  }

  getUser(id: string) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=1');
  }

}
