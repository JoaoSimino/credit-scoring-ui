import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoopcaoComponent } from './selecaoopcao.component';

describe('SelecaoopcaoComponent', () => {
  let component: SelecaoopcaoComponent;
  let fixture: ComponentFixture<SelecaoopcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecaoopcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoopcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
