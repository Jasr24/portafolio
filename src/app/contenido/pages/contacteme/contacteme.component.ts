import { Component } from '@angular/core';
import { IContacto } from '../../interfaces/general';

@Component({
  selector: 'app-contacteme',
  templateUrl: './contacteme.component.html',
  styleUrls: ['./contacteme.component.css']
})
export class ContactemeComponent {
  
  contactos: IContacto[] =[
    {
      logo: '<i class="uil uil-linkedin"></i>',
      nombre: 'Linkedin',
      nombreLink: 'https://www.linkedin.com/in/joséandressaavedraromero/',
      url: 'https://www.linkedin.com/in/joséandressaavedraromero/'
    },
    {
      logo: '<i class="uil uil-github"></i>',
      nombre: 'Github',
      nombreLink: 'https://github.com/Jasr24',
      url: 'https://github.com/Jasr24'
    },
    {
      logo: '<i class="uil uil-envelope"></i>',
      nombre: 'Email: Hotmail',
      nombreLink: 'josex.1995@hotmail.com',
      url: 'mailto:josex.1995@hotmail.com'
    },
    {
      logo: '<i class="uil uil-envelope"></i>',
      nombre: 'Email: Gmail',
      nombreLink: 'joxse.1995@gmail.com',
      url: 'mailto:joxse.1995@gmail.com'
    },
    {
      logo: '<i class="uil uil-phone"></i>',
      nombre: 'Teléfono movil',
      nombreLink: '+57 3143791840',
      url: 'https://api.whatsapp.com/send?phone=573143791840'
    }
  ]

}