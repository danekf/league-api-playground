import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-free-champs',
  templateUrl: './free-champs.component.html',
  styleUrls: ['./free-champs.component.scss']
})
export class FreeChampsComponent implements OnInit {
  apiResponse = {};
  freeChampionIds = [];
  keys = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getFreeChamps().subscribe((data) =>{
      this.apiResponse = data;
    });
  }

}
