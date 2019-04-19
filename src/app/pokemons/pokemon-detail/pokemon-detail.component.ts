import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Location } from '@angular/common'; 
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon;
  constructor(private activatedRoute: ActivatedRoute, private location: Location, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(){
    const id=+this.activatedRoute.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonDetails(id).subscribe(poke => this.pokemon = poke);
  }

}
