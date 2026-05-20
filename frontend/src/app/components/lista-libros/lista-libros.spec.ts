import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // 👈 Necesario para que el test no falle con tu servicio

import { ListaLibrosComponent } from './lista-libros'; // 1. Cambiado al nombre nuevo

describe('ListaLibrosComponent', () => {
  let component: ListaLibrosComponent;
  let fixture: ComponentFixture<ListaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaLibrosComponent], // 2. Actualizado aquí
      providers: [
        provideHttpClient() // 3. ¡Truco extra! Como tu componente usa el servicio HTTP, el test necesita esto para no romperse
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaLibrosComponent); // 4. Actualizado aquí
    component = fixture.componentInstance;
    fixture.detectChanges(); // Reemplazado por detectChanges que es más estándar en el arranque
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
