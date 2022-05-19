import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './app/footer/footer.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { MainComponent } from './app/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosComponent } from './app/productos/productos.component';
import { ContactoComponent } from './app/contacto/contacto.component';
import { NosotrosComponent } from './app/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    ProductosComponent,
    ContactoComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
