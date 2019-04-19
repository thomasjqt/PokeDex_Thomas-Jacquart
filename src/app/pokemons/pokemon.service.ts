import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../models/pokemon.model';
import {PagedData} from '../models/paged.data.model';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'http://51.75.122.159:3000/pokemons';

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<PagedData<Pokemon>>(this.url);
  }

  getPokemonDetails(id : number){
    const url = `${this.url}/${id}`;
    return this.http.get<Pokemon>(url);
  }
}
