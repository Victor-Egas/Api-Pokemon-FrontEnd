import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_model/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  listar(){
   return this.http.get<Pokemon[]>(`${environment.HOST}/pokemon/findAll`);
  }
}
