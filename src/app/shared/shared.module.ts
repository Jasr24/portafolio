import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ContenidoModule } from '../contenido/contenido.module';



@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    ContenidoModule
  ],
  exports: [
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContenidoComponent
  ]
})
export class SharedModule { }
