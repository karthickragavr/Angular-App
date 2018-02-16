import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Movie} from './movie';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class OmdbService {
  configUrl: String;
  private mDetails = new BehaviorSubject<any>([]);
  detail = this.mDetails.asObservable();
  movie: Movie;
  constructor(private http: HttpClient) {
    this.configUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=612d22ef&t=';
  }

  getMovie(movie) {
    movie.replace(' ', '+');
    const link = this.configUrl.concat(movie);
    return this.http.get<Movie>(link);
  }
  searchMovie(x) {
    this.getMovie(x).subscribe(data => this.movie = data, error => console.log(error)
    );
    return this.movie;
  }

}
