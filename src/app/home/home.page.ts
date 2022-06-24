import {Component, OnInit} from '@angular/core';
import {DataService} from '../DataService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  movieList: any[];
  likeMovieList: any[];
  isFavouriteView = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchLikeMovieList();
    this.movieList = this.dataService.movieList;
    this.likeMovieList = this.dataService.likeMovieList;
  }
}
