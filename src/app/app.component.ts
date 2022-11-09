import { Component } from '@angular/core';

import { RIOT_API_KEY } from 'src/environments/apiKey';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'league-api-playground';
  key = RIOT_API_KEY;
}
