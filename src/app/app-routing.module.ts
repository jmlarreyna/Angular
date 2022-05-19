import { NgModule } from '@angular/core';

import{RouterModule, Routes} from "@angular/router";
import { ContactoComponent } from './app/contacto/contacto.component';
import { MainComponent } from './app/main/main.component';
import { NosotrosComponent } from './app/nosotros/nosotros.component';
import { ProductosComponent } from './app/productos/productos.component';


//Rutas

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'nosotros', component: NosotrosComponent}

  //  {path: 'productos', component: ProductosComponent},
   // {path: 'Contacto', component: ContactoComponent},
]




@NgModule({
imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration:'enabled'})],
exports: [
    RouterModule
]
})

export class AppRoutingModule {};
