import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  enviarProposta() {
    this.http.post('http://localhost:5205/api/Proposta', this.proposta)
      .subscribe({
        next: (res) => console.log('Proposta enviada!', res),
        error: (err) => console.error('Erro ao enviar proposta', err)
      });
  }

}
