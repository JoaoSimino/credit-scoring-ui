import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-proposta',
  standalone: false,
  templateUrl: './proposta.component.html',
  styleUrl: './proposta.component.scss'
})
export class PropostaComponent {
  proposta = {
    valorSolicitado: 0,
    clienteId: ''
  };
  constructor(private http: HttpClient) {}

  enviarProposta(form: NgForm) {
    this.http.post('http://localhost:5205/api/Proposta', this.proposta)
      .subscribe({
        next: (res) => {
          console.log('Proposta enviada!', res);
          // Limpa os campos após envio bem-sucedido
          form.resetForm();
        },
        error: (err) => console.error('Erro ao enviar proposta', err)
      });
  }

}
