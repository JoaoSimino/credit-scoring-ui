import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: false,
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      rendaMensal: [null, [Validators.required, Validators.min(0)]],
      idade: [null, [Validators.required, Validators.min(18)]],
      historicoCreditoSimulado: ['']
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      console.log('Cliente cadastrado:', this.clienteForm.value);

      this.http.post('http://apigateway/api/Cliente', cliente)
        .subscribe({
          next: () => {
            alert('Cliente cadastrado com sucesso!');
            this.clienteForm.reset(); // limpa o formulário
          },
          error: err => {
            console.error('Erro ao salvar cliente:', err);
            alert('Erro ao cadastrar cliente.');
          }
        });
    }
  }
}
