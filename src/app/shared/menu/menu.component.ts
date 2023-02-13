import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  links: Array<LinkModel> = [
    {
      link: 'https://www.linkedin.com/in/joséandressaavedraromero/',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    {
      link: 'mailto:josex.1995@hotmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    }
  ]

  curriculum = {
    link: 'assets/HojaDeVida.pdf',
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
  link!: string;
  icon!: string;
}
