import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {DataService} from '../DataService';
import {SearchMovieComponent} from './search-movie/search-movie.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [DataService],
  declarations: [HomePage, SearchMovieComponent, MovieListComponent]
})
export class HomePageModule {}
