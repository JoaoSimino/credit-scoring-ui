import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      rendaMensal: [null, [Validators.required, Validators.min(0)]],
      idade: [null, [Validators.required, Validators.min(18)]],
      historicoCreditoSimulado: ['']
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      console.log('Cliente cadastrado:', this.clienteForm.value);
    }
  }
}
