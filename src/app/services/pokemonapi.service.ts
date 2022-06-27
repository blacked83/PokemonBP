import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {

  apiURL: string = "https://bp-pokemons.herokuapp.com/";
  
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<Pokemon[]>(this.apiURL + '?idAuthor=1');
  }

  deletePokemon(id: number){
    return this.http.delete<any>(this.apiURL + id);
  }
}
