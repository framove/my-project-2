import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterResponseInterface, CharacterInterface } from './../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  private baseUrl: string;

  constructor( private http: HttpClient) { 
    this.baseUrl = 'https://rickandmortyapi.com/api'
  }
  getCharactersDetail(id: string) {
    return this.http.get(`${this.baseUrl}/character/${id}`);
  }
}
