import { Component } from '@angular/core';
import { ILinkModel } from 'src/app/contenido/interfaces/general';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  links: Array<ILinkModel> = [
    {
      link: 'https://www.linkedin.com/in/joséandressaavedraromero/',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    {
      link: 'https://github.com/Jasr24',
      icon: '<i class="uil uil-github"></i>'
    },
    {
      link: 'mailto:josex.1995@hotmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    }
  ]

}