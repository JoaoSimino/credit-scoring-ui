import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent  } from './cliente/lista/lista.component';
import { PropostaComponent  } from './cliente/proposta/proposta.component';



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
  { path: 'clientes/proposta', component: PropostaComponent  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
