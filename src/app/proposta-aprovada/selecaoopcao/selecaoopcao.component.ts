import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';


interface PropostaAprovada {
  id: string;
}

interface OpcaoPagamento {
  quantidadeParcelas: number;
  valorParcela: number;
  valorTotalComJuros: number;
  comJuros: boolean;
}

@Component({
  selector: 'app-selecaoopcao',
  standalone: true,
  templateUrl: './selecaoopcao.component.html',
  styleUrls: ['./selecaoopcao.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SelecaoopcaoComponent implements OnInit {
  propostasAprovadas: PropostaAprovada[] = [];
  opcoesPagamento: OpcaoPagamento[] = [];

  propostaSelecionadaId: string = '';
  opcaoSelecionada: OpcaoPagamento | null = null;

  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get<PropostaAprovada[]>('http://localhost:5062/api/PropostaAprovada')
      .subscribe(data => {
        this.propostasAprovadas = data;
        this.cdr.detectChanges();
      });
  }

  onSelecionarProposta(event: any): void {
    if (this.propostaSelecionadaId) {
      this.http.get<OpcaoPagamento[]>(
        `http://localhost:5062/api/PropostaAprovada/${this.propostaSelecionadaId}/opcoes-de-pagamento`
      ).subscribe(data => {
        this.opcoesPagamento = data;
        this.opcaoSelecionada = null;
        this.cdr.detectChanges();
      });
    }
  }

  onEnviar(): void {
    if (!this.opcaoSelecionada || !this.propostaSelecionadaId) return;
  
    const url = `http://localhost:5062/api/PropostaAprovada/${this.propostaSelecionadaId}/opcao-de-pagamento-selecionada`;
  
    this.http.post(url, this.opcaoSelecionada).subscribe({
      next: () => {
        alert('Opção de pagamento enviada com sucesso!');
      },
      error: err => {
        console.error('Erro ao enviar opção:', err);
        alert('Erro ao enviar a opção de pagamento.');
      }
    });
  }
}
