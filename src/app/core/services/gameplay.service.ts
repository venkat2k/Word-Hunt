import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS, URL_CONSTANTS } from '../constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {

  headers: any;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({ 'content-type': 'application/json', 'credentials': 'include'});
  }

  getGameDetails() {
    return this.http.get(URL_CONSTANTS.API_BASE_URL + API_ENDPOINTS.GET_GAME_DETAILS, 
      { headers: this.headers }
    );
  }

  validateGuess(guess: string, gameId: string) {
    const params = "?gameId=" + gameId + "&guess=" + guess;
    return this.http.get(URL_CONSTANTS.API_BASE_URL + API_ENDPOINTS.VALIDATE_GUESS + params,
      { headers: this.headers });
  }
}
