import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonapiService } from '../../services';
import { ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string = 'Crear';
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

  formPK: FormGroup;

  constructor(private router: Router, private pkServ: PokemonapiService, private activeRoute: ActivatedRoute, public fb: FormBuilder) { 
    this.activeRoute.params.subscribe(params => {
      if(params['id']){
        this.getPokemon(params['id']);
        this.title = 'Modificar';
      }
    });

    this.formPK = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required],
      attack: [0, Validators.min(1)],
      defense: [0, Validators.min(1)],
      hp: [0, Validators.min(1)],
      idAuthor: [1]
    });
  }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigateByUrl('');
  }

  save(){
      if(this.formPK.get('id')?.value == 0){
        this.pkServ.createPokemon(this.formPK.value).subscribe(res => {
          this.cancel();
        });
      } else {
        this.pkServ.updatePokemon(this.formPK.value).subscribe(res => {
          this.cancel();
        });
      } 
  }

  getPokemon(id: number){
    this.pkServ.getPokemon(id).subscribe(res => {
      this.formPK.get('id')?.setValue(res.id);
      this.formPK.get('name')?.setValue(res.name);
      this.formPK.get('image')?.setValue(res.image);
      this.formPK.get('attack')?.setValue(res.attack);
      this.formPK.get('defense')?.setValue(res.defense);
      this.formPK.get('hp')?.setValue(res.hp);
      this.formPK.get('type')?.setValue(res.type);
      this.formPK.get('idAuthor')?.setValue(res.id_author);
    });
  }
}
