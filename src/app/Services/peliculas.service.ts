import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line: import-blacklist
import { map } from 'rxjs/operators';

@Injectable()
export class PeliculasService {

  private apikey = 'c769546fe219654ca9c5300010798d25';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor( private http: HttpClient ) { }

  getPopulares(){

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url ).pipe( map ( (res: any) => {
      // tslint:disable-next-line: no-unused-expression
      console.log(res);
    }));
  }

  buscarPelicula( texto: string ){

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url ).pipe( map ( (res: any) => {
      this.peliculas = res.results;
      return res.results;
    }));
  }

  getImagen(){

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url );

  }

  getGenero(){
    const url = `${this.urlMoviedb}/genre/movie/list?api_key=${this.apikey}&language=en-US`;

    return this.http.get( url );
  }

  getPelicula(id: string){
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=en-US`;
    return this.http.get(url);
  }

}
