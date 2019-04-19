import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../../models/pokemon.model';
import {PagedData} from '../../models/paged.data.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: PagedData<Pokemon> ;
  constructor(private pokemonService: PokemonService) { }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe(poke => this.pokemons = poke);
  }
  ngOnInit() {
    this.getPokemons();
  }

}
