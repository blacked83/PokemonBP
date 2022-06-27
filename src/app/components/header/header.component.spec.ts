import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('(2) Prueba del HeaderComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule
          ],
          declarations: [
            HeaderComponent,
          ]
        }).compileComponents();
    });

    it('Instanciación de HeaderComponent', () => {
        let fixture = TestBed.createComponent(HeaderComponent);
        let app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('Verificación del DOM de HeaderComponent', () => {
        let fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        let compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('div#powerby')?.textContent).toContain('Desarrollado por: Ronald León');
        expect(compiled.querySelector('img#logo')?.getAttribute('src')).toMatch(/assets\/img\/logo.png$/);
    });
});