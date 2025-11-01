import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { IGitMostrar } from '../../interfaces/general';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  repos: IGitMostrar[] = [];

  constructor(private service: GithubService) {
  }

  ngOnInit(): void {
    this.service.getRespositorios().subscribe(repo => {
      repo.map(res => {
        if(res.topics.length > 0){
          this.repos.unshift(
            {
              name: res.name,
              description: res.description,
              topics: res.topics,
              html_url: res.html_url,
              created_at: res.created_at,
              page: this.accederPagina(res.description.split(' '))
            }
            );
        }
      })

      this.repos.unshift(
        {
          name: 'Backoffices',
          description: `Participación en el desarrollo de diversos proyectos de backoffice, incluyendo:
            <br><br><a class="col url" href="https://www.sw360.com.co/" target="_blank">Super Wow</a>,
            <br><a class="col url" href="https://app.digitalk.com.co/" target="_blank">Digitalk</a>,
            <br><a class="col url" href="https://dashmate.xtracking.co/" target="_blank">Xtracking</a>,
            <br><a class="col url" href="https://reverseqa.coomeva.com.co/oficina-virtual-nueva-dos/#/new-dashboard" target="_blank">Coomeva Oficina virtual</a>,
            <br><a class="col url" href="https://oficinavirtualmp.coomeva.com.co/coomeva-admin/#/login" target="_blank">Coomeva Ayuda ventas</a>`,
          topics: ['Angular'],
          html_url: '',
          created_at: '2025-10-01T00:00:00Z',
          page: ''
        },
        {
          name: 'Apps',
          description: `Participación en el desarrollo de diversos proyectos Android, incluyendo:
            <br><br><a class="col url" href="https://play.google.com/store/apps/details?id=com.proximate.sw360&hl=es_CO&pli=1" target="_blank">Super Wow</a>,
            <br><a class="col url" href="https://play.google.com/store/apps/details?id=com.proximate.dinissan&hl=es_CO" target="_blank">DINISSAN</a>,
            <br><a class="col url" href="https://play.google.com/store/search?q=fepasde&c=apps&hl=es_CO" target="_blank">FEPASDE</a>,
            <br><a class="col url" href="https://play.google.com/store/search?q=urosario&c=apps&hl=es_CO" target="_blank">U.Rosario</a>,
            <br><a class="col url" href="https://play.google.com/store/apps/details?id=com.proximate.xtracking&hl=es_CO" target="_blank">XtrackingP</a>,
            <br><a class="col url" href="https://play.google.com/store/search?q=medplus&c=apps&hl=es_CO" target="_blank">Medplus App</a>`,
          topics: ['Angular'],
          html_url: '',
          created_at: '2025-10-01T00:00:00Z',
          page: ''
        },
        {
          name: 'Super wow Citas',
          description: 'Participación en el proyecto Web de citas, desarrollando el sistema web de reservas para la empresa Super Wow, implementando funcionalidades de gestión de citas y mejoras en la experiencia del usuario.',
          topics: ['Angular'],
          html_url: '',
          created_at: '2024-10-01T00:00:00Z',
          page: 'https://citas.sw360.com.co/'
        }
      )
    })
  }

  private accederPagina(arreglo: string[]):string {

    let ultimo: string = arreglo[arreglo.length-1];

    return ultimo;
  }


}
