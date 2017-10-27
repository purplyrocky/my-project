import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

import { Movie } from '../models/movie';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movieList: Observable<Movie[]>;
  searchText: string;
  title = 'WTT';

  constructor(private db: AngularFirestore) {}

  ngOnInit() {

    this.movieList = this.db.collection('movies').valueChanges();
    //this.movieList.subscribe(res => console.log(res));
  }

}
