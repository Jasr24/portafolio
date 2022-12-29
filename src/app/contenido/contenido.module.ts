import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    FormacionComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    FormacionComponent
  ]
})
export class ContenidoModule { }
