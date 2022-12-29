import { Component, Input } from '@angular/core';
import { IHabilidad } from '../../interfaces/general';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent {

  @Input()
  habilidad!: IHabilidad;

}
