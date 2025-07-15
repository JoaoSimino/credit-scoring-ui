import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ClienteModule } from './cliente/cliente.module';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { ListapropostaComponent } from './proposta-aprovada/listaproposta/listaproposta.component';

import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    ListapropostaComponent
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
