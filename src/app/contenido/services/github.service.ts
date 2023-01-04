import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IGitMostrar } from '../interfaces/general';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //readonly: significa solo lectura
  private readonly url:string = 'https://api.github.com/users/Jasr24/repos';

  constructor(private httpClient: HttpClient) { 
  }

  getRespositorios(): Observable<IGitMostrar[]> {
    return this.httpClient.get<IGitMostrar[]>(this.url)
      .pipe(
        map( (res:IGitMostrar[]) => {
          return res.map(repositorio => {
            return {
              name: repositorio.name,
              description: repositorio.description,
              topics: repositorio.topics,
              html_url: repositorio.html_url,
              created_at: repositorio.created_at
            }
          })
        })
      );
  }
}
