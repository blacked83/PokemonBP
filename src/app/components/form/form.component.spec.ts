import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormComponent } from './form.component';
import { PokemonapiService, DeletemodalService } from './../../services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('(4) Prueba del FormComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            FormsModule,
            ReactiveFormsModule  
          ],
          declarations: [
            FormComponent
          ],
          providers: [
            PokemonapiService
          ]
        }).compileComponents();
    });

    it('Instanciación de FormComponent', () => {
        let fixture = TestBed.createComponent(FormComponent);
        let app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
    it('Prueba del Formulario - Datos incompletos', () => {
        let fixture = TestBed.createComponent(FormComponent);
        let app = fixture.componentInstance;
        fixture.detectChanges();
        app.formPK.controls['name'].setValue('Pikachu');
        app.formPK.controls['type'].setValue('Planta');
        fixture.debugElement.query(By.css('#buttons button:last-child')).nativeElement.click();
        expect(app.formPK.invalid).toEqual(true);
    });

    it('Prueba del Formulario - Datos completos', () => {
        let fixture = TestBed.createComponent(FormComponent);
        let app = fixture.componentInstance;
        fixture.detectChanges();
        app.formPK.controls['name'].setValue('Pikachu');
        app.formPK.controls['image'].setValue('https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png');
        app.formPK.controls['type'].setValue('Planta');
        app.formPK.controls['attack'].setValue(32);
        app.formPK.controls['defense'].setValue(27);
        app.formPK.controls['hp'].setValue(3);
        app.formPK.controls['idAuthor'].setValue(1);
        fixture.debugElement.query(By.css('#buttons button:last-child')).nativeElement.click();
        expect(app.formPK.invalid).toEqual(false);
    });
});