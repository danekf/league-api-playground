import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RIOT_API_KEY } from 'src/environments/apiKey';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  //setup http as the call to use HttpClient, just shorthand private method here.
  constructor(private http: HttpClient) { }


  getFreeChamps(){
    return this.http.get(`https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${RIOT_API_KEY}`)
  }
}
