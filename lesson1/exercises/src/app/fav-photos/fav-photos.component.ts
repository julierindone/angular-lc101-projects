import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best Pictures from the Old Guard';
  image1 = 'https://deadline.com/wp-content/uploads/2020/07/the-old-guard-1.jpg?w=681&h=383&crop=1';
  image2 = 'https://i.guim.co.uk/img/media/602569a7e5b68257c56beb59a7cd11e936c40678/0_198_4500_2802/master/4500.jpg?width=620&quality=85&auto=format&fit=max&s=ed5755feefcd08b3624c52e0106532be';
  image3 = 'https://chewelahindependent.com/wp-content/uploads/2020/08/theoldguard.jpg';

  constructor() { }

  ngOnInit() {
  }

}