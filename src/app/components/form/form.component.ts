import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonapiService } from '../../services';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string = 'Crear';
  pokemon = {
    id: 0,
    name: '',
    image: '',
    type: '',
    attack: 0,
    defense: 0,
    hp: 0,
    idAuthor: 1
  };
  typeList: string[] = [
    "Acero", 
    "Agua",
    "Bicho", 
    "Dragón", 
    "Eléctrico",
    "Fantasma", 
    "Fuego", 
    "Hada",
    "Hielo",  
    "Lucha", 
    "Normal",
    "Planta",
    "Psíquico", 
    "Roca", 
    "Tierra", 
    "Veneno", 
    "Volador"    
  ];

  constructor(private router: Router, private pkServ: PokemonapiService, private activeRoute: ActivatedRoute) { 
    this.activeRoute.params.subscribe(params => {
      if(params['id']){
        this.getPokemon(params['id']);
        this.title = 'Modificar';
      }
        
    });
  }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigateByUrl('');
  }

  save(){
    if(this.pokemon.name.length > 0 && this.pokemon.image.length > 0 && this.pokemon.type.length > 0 && this.pokemon.attack > 0 && this.pokemon.defense > 0 && this.pokemon.hp > 0)
      if(this.pokemon.id == 0){
        this.pkServ.createPokemon(this.pokemon).subscribe(res => {
          this.cancel();
        });
      } else {
        this.pkServ.updatePokemon(this.pokemon).subscribe(res => {
          this.cancel();
        });
      } 
  }

  getPokemon(id: number){
    this.pkServ.getPokemon(id).subscribe(res => {
      this.pokemon.id = res.id;
      this.pokemon.name = res.name;
      this.pokemon.image = res.image;
      this.pokemon.attack = res.attack;
      this.pokemon.defense = res.defense;
      this.pokemon.hp = res.hp;
      this.pokemon.type = res.type;
      this.pokemon.idAuthor = res.id_author;
    });
  }
}
