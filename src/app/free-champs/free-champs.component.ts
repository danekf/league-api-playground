import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-free-champs',
  templateUrl: './free-champs.component.html',
  styleUrls: ['./free-champs.component.scss']
})
export class FreeChampsComponent implements OnInit {
  apiResponse: any;
  freechampions = [];
  parsedResponse = {};

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getFreeChamps().subscribe((data) =>{
      this.apiResponse = data;
    });
  }
}
