import { CharacterResponseInterface, CharacterInterface } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserListService {

  private baseUrl: string;

  constructor( private http: HttpClient) { 
    this.baseUrl = 'https://rickandmortyapi.com/api'
  }

  getCharacters(): Observable<CharacterResponseInterface> {
    return this.http.get<CharacterResponseInterface>(`${this.baseUrl}/character/`);
  }

  getCharactersDetail(id: string) {
    return this.http.get(`${this.baseUrl}/character/${id}`);
  }
  
}
