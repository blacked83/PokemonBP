import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonPost } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {

  apiURL: string = "https://bp-pokemons.herokuapp.com/";
  
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<Pokemon[]>(this.apiURL + '?idAuthor=1');
  }

  getPokemon(id: number){
    return this.http.get<Pokemon>(this.apiURL + id);
  }

  deletePokemon(id: number){
    return this.http.delete<any>(this.apiURL + id);
  }

  createPokemon(pokemon: PokemonPost){
    return this.http.post<any>(this.apiURL + '?idAuthor=1', pokemon);
  }

  updatePokemon(pokemon: PokemonPost){
    return this.http.put<any>(this.apiURL + pokemon.id, pokemon);
  }
}
