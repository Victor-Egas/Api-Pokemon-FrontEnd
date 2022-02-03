import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemones : Pokemon[] | undefined;

  constructor( private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.listar().subscribe(data => this.pokemones = data);
  }

}
