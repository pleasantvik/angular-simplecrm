import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  color = 'red';
  priceTo = 0;
  size = 'M';
  id = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.color = params.color;
      this.priceTo = params.priceTo;
      this.size = params.size;
      this.id = params.id;
      console.log(params);
    });
  }

  ngOnInit(): void {}
}
