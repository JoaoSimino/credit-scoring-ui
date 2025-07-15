import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapropostaComponent } from './listaproposta.component';

describe('ListapropostaComponent', () => {
  let component: ListapropostaComponent;
  let fixture: ComponentFixture<ListapropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListapropostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
