import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent  } from './cliente/lista/lista.component';



const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full'
  },
  { path: 'clientes/lista', component: ListaComponent  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
