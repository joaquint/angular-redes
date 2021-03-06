import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { ListadoComponent } from './listado/listado.component';
import { HeaderComponent } from './header/header.component';
import { FootComponent } from './foot/foot.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    HeaderComponent,
    FootComponent,
    DetalleComponent,
    NuevoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
