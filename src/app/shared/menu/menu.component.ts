import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  links: Array<LinkModel> = [
    {
      name:"1. Linkedin:",
      link: 'https://www.linkedin.com/in/jose-andres-saavedra-romero-developer',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    {
      name:"2. Correo:",
      link: 'mailto:josex.1995@hotmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    }
  ]

  curriculum = {
    link: 'assets/HojaDeVidaJoseAndresV2.pdf',
    name: 'CV'
  }

  ema:string = '<i class="uil uil-moon"></i>';
  luna:string = '<i class="uil uil-moon"></i>';
  sol:string = '<i class="uil uil-sun"></i>';

  tema() {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
      this.ema = this.sol;
    } else {
      this.ema = this.luna;
    }
  }
}

class LinkModel {
  name!: string;
  link!: string;
  icon!: string;
}
