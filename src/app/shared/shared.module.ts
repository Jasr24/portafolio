import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MenuComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
