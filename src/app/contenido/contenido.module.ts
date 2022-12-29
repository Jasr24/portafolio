import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';

import { MatCardModule } from '@angular/material/card';
import { EducacionFormalComponent } from './components/educacion-formal/educacion-formal.component';
import { EducacionComplementariaComponent } from './components/educacion-complementaria/educacion-complementaria.component';

@NgModule({
  declarations: [
    FormacionComponent,
    HabilidadesComponent,
    EducacionFormalComponent,
    EducacionComplementariaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    FormacionComponent,
    HabilidadesComponent
  ]
})
export class ContenidoModule { }
