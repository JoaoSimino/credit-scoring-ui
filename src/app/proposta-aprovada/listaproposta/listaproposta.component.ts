import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';



interface PropostaAprovada {
  id: string;
  propostaId: string;
  clienteId: string;
  valorAprovado: number;
  dataRecebimento: string;
  statusProcessamento: string;
}

@Component({
  selector: 'app-listaproposta',
  templateUrl: './listaproposta.component.html',
  styleUrls: ['./listaproposta.component.scss'],
  imports: [CommonModule, DecimalPipe] 
})
export class ListapropostaComponent implements OnInit {
  propostas: PropostaAprovada[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get<PropostaAprovada[]>('http://apigateway/api/PropostaAprovada') // Use seu endpoint correto aqui
      .subscribe(data => {
        this.propostas = data;
        this.cdr.detectChanges();
      });
  }
}
