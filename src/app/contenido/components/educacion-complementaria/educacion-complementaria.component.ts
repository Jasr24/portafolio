import { Component, Input } from '@angular/core';
import { IEducacion } from '../../interfaces/general';

@Component({
  selector: 'app-educacion-complementaria',
  templateUrl: './educacion-complementaria.component.html',
  styleUrls: ['./educacion-complementaria.component.css']
})
export class EducacionComplementariaComponent {

  @Input()
  complementarios!: IEducacion[];

}
