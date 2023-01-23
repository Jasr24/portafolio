import { Component } from '@angular/core';
import { IEducacion } from '../../interfaces/general';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  formal: IEducacion[] = [
    {
      logo: 'assets/unad.png',
      institucion: 'Universidad nacional abierta y a distancia',
      programa: 'Ingenieria de sistemas',
      fechas: 'feb. 2023 - feb. 2028'
    },
    {
      logo: 'assets/sena.png',
      institucion: 'Servicio naional de apredizaje (SENA)',
      programa: 'Tecnologo en analisis y desarrollo de Software',
      fechas: 'nov. 2022 - feb. 2025'
    },
    {
      logo: 'assets/politecnico.png',
      institucion: 'Politécnico Tolimense',
      programa: 'Técnico laboral por competencias en sistemas y desarrollo de Software',
      credencial: 'https://drive.google.com/file/d/1BnZbzo50VdUF7nIzHTtXZLqbis4C-gEs/view?usp=sharing',
      fechas: 'jul. 2019 - ago. 2020'
    },
    {
      logo: 'assets/sena.png',
      institucion: 'Servicio naional de apredizaje (SENA)',
      programa: 'Tecnologo en control ambiental',
      credencial: 'https://drive.google.com/file/d/1LRW6Nkch8Ke607SzySX5KVCpmVIj8b9k/view?usp=sharing',
      fechas: 'feb. 2015 - jul. 2017'
    }
  ]

  complementarios: IEducacion[] = [
    {
      logo: 'assets/udemy.png',
      institucion: 'Udemy',
      programa: 'Angular: De cero a experto',
      fechas: 'ene. 2023',
      duracion: '44hrs',
      credencial: 'https://www.udemy.com/certificate/UC-ffcc17c3-a6a4-4e1a-bc59-734002e37bf3/'
    },
    {
      logo: 'assets/alura.jpg',
      institucion: 'Oracle Next Education',
      programa: 'Formación Front End G3- ONE',
      fechas: 'nov. 2022',
      duracion: '109 hrs',
      credencial: 'https://app.aluracursos.com/degree/certificate/3333660a-7e2a-496e-b255-2d2aac606f97'
    },
    {
      logo: 'assets/udemy.png',
      institucion: 'Udemy',
      programa: 'Spring Boot, Thymeleaf, MySql, MongoDB, API Rest',
      fechas: 'nov. 2022',
      duracion: '23.5hrs',
      credencial: 'https://www.udemy.com/certificate/UC-38f50d49-02e4-4758-a697-3cbc4e9702cb/'
    },
    {
      logo: 'assets/udemy.png',
      institucion: 'Udemy',
      programa: 'Máster completo en Java de cero a experto 2022',
      fechas: 'sept. 2022',
      duracion: '+127hrs',
      credencial: 'https://www.udemy.com/certificate/UC-a5679112-bd9e-4358-955a-dc6d36abb919/'
    },
    {
      logo: 'assets/udemy.png',
      institucion: 'Udemy',
      programa: 'Máster en SQL Server: Desde cero a nivel profesional',
      fechas: 'jul. 2022',
      duracion: '16hrs',
      credencial: 'https://www.udemy.com/certificate/UC-1b459e5f-1fcc-4fc0-90c9-d9cebeabe0be/'
    },
    {
      logo: 'assets/oracle.png',
      institucion: 'Oracle Academy',
      programa: 'Java Foundations',
      fechas: 'jun. 2022',
      credencial: 'https://drive.google.com/file/d/1icEBxxtLpC6ddH0BX3sLLLHlgV8QuIT0/view'
    },
    {
      logo: 'assets/oracle.png',
      institucion: 'Oracle Academy',
      programa: 'Java Fundamentals',
      fechas: 'jun. 2022',
      credencial: 'https://drive.google.com/file/d/1iARYEA2C3bPTJ-815lr7ANa1WTg3xK1i/view'
    },
    {
      logo: 'assets/udemy.png',
      institucion: 'Udemy',
      programa: 'TypeScript: Tu completa guía y manual de mano',
      fechas: 'ene. 2022',
      duracion: '9hrs',
      credencial: 'https://www.udemy.com/certificate/UC-42020893-0954-48a2-bd30-22927f1f1d36/'
    }
  ]

}