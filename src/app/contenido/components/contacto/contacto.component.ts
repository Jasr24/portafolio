import { Component, Input } from '@angular/core';
import { IContacto } from '../../interfaces/general';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  @Input()
  contacto!: IContacto;

}
