import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  persona: Persona;

  constructor(private http: HttpClient) { }

  createUser(name: string, job: string) {
    return this.http.post('https://reqres.in/api/users', '{ "name": "' + name + '", "job": "' + job + '" }');
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

  login(email: string, password: string) {
    let body: string = '{ "email": "' + email + '", "password": "' + password + '" }';
    return this.http.post('https://reqres.in/api/login', JSON.parse(body));
  }

}
