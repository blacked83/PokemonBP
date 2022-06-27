import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonlistComponent } from './pokemonlist.component';
import { PokemonapiService, DeletemodalService } from './../../services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('(3) Prueba del PokemonlistComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            HttpClientTestingModule
          ],
          declarations: [
            PokemonlistComponent
          ],
          providers: [
            PokemonapiService,
            DeletemodalService
          ]
        }).compileComponents();
    });

    it('Instanciación de PokemonlistComponent', () => {
        let fixture = TestBed.createComponent(PokemonlistComponent);
        let app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
    it('Verificación del DOM de PokemonlistComponent', () => {
        let fixture = TestBed.createComponent(PokemonlistComponent);
        fixture.detectChanges();
        let compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.container #search input[type=text]')?.getAttribute('name')).toEqual('search');
    });
});