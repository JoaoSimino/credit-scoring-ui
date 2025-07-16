import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


interface Parcela {
  id: string;
  numero: number;
  valor: number;
  vencimento: string;
  status: string;
}

@Component({
  selector: 'app-listaparcela',
  standalone: true,
  templateUrl: './listaparcela.component.html',
  styleUrls: ['./listaparcela.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ListaparcelaComponent implements OnInit{
  clienteId: string = '';
  parcelas: Parcela[] = [];
  buscando = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  buscarParcelas(): void {
    if (!this.clienteId) return;

    this.buscando = true;
    this.http.get<Parcela[]>(`http://localhost:5062/api/Parcelas/cliente/${this.clienteId}`)
      .subscribe({
        next: data => {
          this.parcelas = data;
          this.buscando = false;
          this.cdr.detectChanges();
        },
        error: err => {
          console.error('Erro ao buscar parcelas:', err);
          this.buscando = false;
          this.cdr.detectChanges();
        }
      });
  }
}
