import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyReceiverService {


  url = 'http://localhost:5000/api/person/';

  constructor(private http: HttpClient) {}

getAllListOfPeople(): Observable<Person[]>{
  return this.http.get<Person[]>(this.url + 'all');
}
getOnePersonByID(id: string): Observable<Person>{
  return this.http.get<Person>(this.url + id);
}
createPerson(person: Person): Observable<string>{
  return this.http.post<string>(this.url + 'new', person);
}
editPerson(person: Person){
  return this.http.put(this.url, person);
}
deletePerson(id: string){
  return this.http.put(this.url + 'delete/' + id, {});
}

}
