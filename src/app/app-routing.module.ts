import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'empleados', component: ListadoComponent },
  { path: 'empleados/:id', component: DetalleComponent },
  { path: 'nuevo', component: NuevoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
