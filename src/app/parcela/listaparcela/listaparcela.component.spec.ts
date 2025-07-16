import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaparcelaComponent } from './listaparcela.component';

describe('ListaparcelaComponent', () => {
  let component: ListaparcelaComponent;
  let fixture: ComponentFixture<ListaparcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaparcelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaparcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
