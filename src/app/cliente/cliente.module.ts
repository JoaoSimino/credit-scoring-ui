import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', component: FormularioComponent }
];

@NgModule({
  declarations: [FormularioComponent, ListaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormularioComponent,
    ListaComponent
  ]
})
export class ClienteModule { }
