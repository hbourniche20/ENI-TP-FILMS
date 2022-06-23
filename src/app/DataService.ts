
export class DataService {

  movieList: any[] = [];
  likeMovieList: any[] = [];

  constructor() {
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
    } else {
      this.likeMovieList.push(movie);
      movie.liked = true;
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
