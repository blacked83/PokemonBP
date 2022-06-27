import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: PokemonlistComponent },
  { path: 'new', component:  FormComponent},
  { path: 'pokemon/:id', component:  FormComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
