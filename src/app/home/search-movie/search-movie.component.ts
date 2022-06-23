import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../DataService';
import {HttpClient} from '@angular/common/http';
import {API_LINK} from '../../cst';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {

  @Output() searchExecuted = new EventEmitter<any>();

  keyWord = 'Hunger Games';

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
  }

  onSearch() {
    const link = API_LINK + 's=' + this.keyWord;
    this.searchExecuted.emit(null);
    return this.http.get(link).subscribe(
      (movie) => {
        console.log(movie);
        this.dataService.updateSearchList(movie['Search']);
      }
    );
  }

}
