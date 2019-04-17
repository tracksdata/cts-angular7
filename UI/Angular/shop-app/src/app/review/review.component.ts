import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {


  @Input('value') review;
  starsArr = [];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    for (let i = 0; i < this.review.stars; i++) {
      this.starsArr.push(i);
    }
  }

}
