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
    })
  }

  private accederPagina(arreglo: string[]):string {
    
    let ultimo: string = arreglo[arreglo.length-1];
    
    return ultimo;
  }


}
