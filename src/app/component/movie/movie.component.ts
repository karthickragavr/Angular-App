import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../../omdb.service';
import { Movie } from '../../movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  moviename: String;
  data: Movie;
  errortext : string;
  constructor(private _omdb: OmdbService) {
   }

  ngOnInit() {
    this.moviename = 'The Matrix';
  }
  onClick() {
    console.log('clicked');
  }
  searchDB() {
   this.data = this._omdb.searchMovie(this.moviename);
  }
}
