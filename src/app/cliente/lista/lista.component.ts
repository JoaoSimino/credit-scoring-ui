import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{
  clientes: any[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes() {
    this.http.get<any[]>('http://localhost:5205/api/Cliente')
      .subscribe(data => {
        this.clientes = data;
        this.cdr.detectChanges();  
      });
  }
}
