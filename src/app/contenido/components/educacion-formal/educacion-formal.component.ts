import { Component, Input } from '@angular/core';
import { IEducacion } from '../../interfaces/general';

@Component({
  selector: 'app-educacion-formal',
  templateUrl: './educacion-formal.component.html',
  styleUrls: ['./educacion-formal.component.css']
})
export class EducacionFormalComponent {

  @Input()
  formal!: IEducacion[];

}
