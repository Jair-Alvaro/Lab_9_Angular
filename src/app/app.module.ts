import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ImageListComponent } from './imagen-lista/imagen-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContadorComponent,
    ImageListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
