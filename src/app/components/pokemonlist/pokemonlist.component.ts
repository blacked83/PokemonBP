import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonapiService, DeletemodalService } from 'src/app/services';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  pokemons: Pokemon[] = [];
  data: Pokemon[] = [];
  modalSW: boolean = false;
  pokemonID: number = 0;
  pokemonName: string = '';

  constructor(private pokemonService: PokemonapiService, private modalServ: DeletemodalService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
    this.modalServ.$modal.subscribe(value => {
      this.modalSW = value == 1 ? true : false;
      if(value == 2)
        this.pokemonService.deletePokemon(this.pokemonID).subscribe(res => { this.getPokemons() });
      console.log('Datois Recibidos: ', value);
    });
  }

  getPokemons(){
    this.pokemonService.getPokemons().subscribe(res => {
      this.pokemons = res;
      this.data = res;
    });
  }

  pokemonFilter(event: Event){
    let filterValue = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    if(filterValue.trim().length > 0){
      this.data = this.pokemons.filter(pokemon => pokemon.name.toLocaleLowerCase().indexOf(filterValue) > -1);
    }else{
      this.data = this.pokemons;
    }
  }

  showModal(name: string, id: number){
    this.pokemonID = id;
    this.pokemonName = name;

    this.modalServ.$modal.emit(1);
  }

  postPokemon(){
    this.router.navigateByUrl('new');
  }

  putPokemon(id: number){
    this.router.navigateByUrl('pokemon/' + id);
  }

}
