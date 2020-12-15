import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: array = ["https://www.imdb.com/title/tt7556122/", "https://imagecomics.com/comics/series/the-old-guard", "https://archiveofourown.org/tags/The%20Old%20Guard%20(Movie%202020)/works"]

  constructor() { }

  ngOnInit() {
  }

}
