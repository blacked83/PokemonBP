import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { PokemonapiService, DeletemodalService } from './services';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { FormComponent } from './components/form/form.component';

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonlistComponent,
    DeleteModalComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PokemonapiService, 
    DeletemodalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
