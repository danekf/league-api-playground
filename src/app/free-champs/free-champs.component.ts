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
  parsedResponse: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getFreeChamps().subscribe((data) =>{
      //raw return of data
      this.apiResponse = data;

      //parsed data
      this.parsedResponse = this.apiResponse;
    });
  }

}
