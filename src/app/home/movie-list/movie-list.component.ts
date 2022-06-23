import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../DataService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  @Input() movieList: any[];

  likeMovieList: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.likeMovieList = this.dataService.likeMovieList;
  }

  public onLikeMovie(movie: any) {
    this.dataService.likeMovie(movie);
  }

}
