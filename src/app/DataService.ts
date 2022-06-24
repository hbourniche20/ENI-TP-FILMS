import {HttpClient} from '@angular/common/http';
import {DB_LINK} from './cst';
import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class DataService {

  movieList: any[] = [];
  likeMovieList: any[] = [];

  constructor(private http: HttpClient) {
  }

  fetchLikeMovieList() {
    this.http.get(DB_LINK).subscribe(
      (data: any) => {
        console.log(data);
        for (const attribut in data) {
          console.log(attribut);
          this.likeMovieList.push(data[attribut]);
        }
        console.log(this.likeMovieList);
      }
    );
  }

  updateSearchList(list: any[]) {
    this.movieList.splice(0, this.movieList.length);
    for (let i=0; list.length > i; i++) {
      list[i].liked = this.moviePositionInLikeList(list[i]['imdbID']) > -1;
      this.movieList.push(list[i]);
    }
  }

  likeMovie(movie: any) {
    const moviePosition = this.moviePositionInLikeList(movie['imdbID']);
    if (moviePosition > -1) {
      this.likeMovieList.splice(moviePosition, 1);
      movie.liked = false;
      this.http.delete(DB_LINK, movie).subscribe(
        () => console.log('DELETE OK')
      );
    } else {
      this.likeMovieList.push(movie);
      movie.liked = true;
      this.http.post(DB_LINK, movie).subscribe(
        () => console.log('POST OK')
      );
    }
  }

  moviePositionInLikeList(movieId: any) {
    for (let i=0; i < this.likeMovieList.length; i++) {
      const currentMovie = this.likeMovieList[i];
      if (movieId === currentMovie['imdbID']) {
        return i;
      }
    }
    return -1;
  }

}
