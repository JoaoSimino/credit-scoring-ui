import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { PropostaComponent } from './proposta/proposta.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: FormularioComponent }
];

@NgModule({
  declarations: [FormularioComponent, ListaComponent, PropostaComponent,PropostaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormularioComponent,
    ListaComponent,
    PropostaComponent
  ]
})
export class ClienteModule { }
