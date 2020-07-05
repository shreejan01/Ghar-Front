import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from "../@model/room";


@Injectable({
  providedIn: 'root'
})
export class RoomService {
        private url = 'http://localhost:8080/room';
  constructor(private http: HttpClient) { }

   getAll(): Observable<any> {
     return this.http.get(`${this.url}/list`);
   }

   getById(id : number): Observable<any> {
     return this.http.get(`${this.url}/list/${id}`);
   }

   addRoom(room : Object): Observable<Object> {
     return this.http.post(`${this.url}/create`, room);
   }

   delete(id : number): Observable<any> {
     return this.http.delete(`${this.url}/${id}`);
   }
 }
