import { Component, Input } from '@angular/core';
import { IGitMostrar } from '../../interfaces/general';

@Component({
  selector: 'app-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.css']
})
export class ProyectoCardComponent {

  @Input()
  repo!:IGitMostrar;
}
