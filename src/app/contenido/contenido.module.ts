import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { EducacionFormalComponent } from './components/educacion-formal/educacion-formal.component';
import { EducacionComplementariaComponent } from './components/educacion-complementaria/educacion-complementaria.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { HojaDeVidaComponent } from './pages/hoja-de-vida/hoja-de-vida.component';
import { ContactemeComponent } from './pages/contacteme/contacteme.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectoCardComponent } from './components/proyecto-card/proyecto-card.component';

@NgModule({
  declarations: [
    FormacionComponent,
    HabilidadesComponent,
    EducacionFormalComponent,
    EducacionComplementariaComponent,
    HabilidadComponent,
    HojaDeVidaComponent,
    ContactemeComponent,
    ContactoComponent,
    ProyectosComponent,
    ProyectoCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    FormacionComponent,
    HabilidadesComponent,
    HojaDeVidaComponent,
    ContactemeComponent,
    ProyectosComponent
  ]
})
export class ContenidoModule { }
