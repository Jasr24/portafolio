import { Component } from '@angular/core';
import { IHabilidad } from '../../interfaces/general';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  tecnicas: IHabilidad[] = [
    {
      logo: 'assets/angular.png',
      nombre: 'Angular'
    },
    {
      logo: 'assets/js.png',
      nombre: 'JavaScript'
    },
    {
      logo: 'assets/java.png',
      nombre: 'Java'
    },
    {
      logo: 'assets/springboot.png',
      nombre: 'SpringBoot'
    },
    {
      logo: 'assets/mysql.png',
      nombre: 'Mysql'
    },
    {
      logo: 'assets/git.png',
      nombre: 'Git'
    }
  ]

  blandas: IHabilidad[] = [
    {
      logo: 'assets/comunicacion.png',
      nombre: 'Comunicación clara'
    },
    {
      logo: 'assets/equipo.png',
      nombre: 'Trabajo en equipo'
    },
    {
      logo: 'assets/adaptacion.png',
      nombre: 'Adaptación al cambio'
    },
    {
      logo: 'assets/tiempo.png',
      nombre: 'Gestión del tiempo'
    },
    {
      logo: 'assets/solucion.png',
      nombre: 'Resolucion de problemas'
    },
    {
      logo: 'assets/cerebro.png',
      nombre: 'Aprendizaje continuo'
    },
    {
      logo: 'assets/interpersonales.png',
      nombre: 'Habilidades interpersonales'
    },
    {
      logo: 'assets/responsabilidad.png',
      nombre: 'Responsabilidad'
    }
  ]

}
