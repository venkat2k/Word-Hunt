import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS, URL_CONSTANTS } from '../constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {
  gameWord: string = '';
  headers: any;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({ 'content-type': 'application/json'});
  }

  setGameWord(word: string) {
    this.gameWord = word;
  }

  getGameWord(): string {
    return this.gameWord;
  }

  validateGuess(guess: string) {
    let correct = 0, misplaced = 0, valid = true, match = false;
    let unique = new Set(guess);
    let response;
    if (guess.length != 4 || unique.size != 4) {
      response = {
        valid: false
      }
      return response;
    }
    guess = guess.toLowerCase();
    for (let i = 0; i < 4; i++) {
      if (guess.charCodeAt(i) < 97 || guess.charCodeAt(i) >= 123) {
        response = {
          valid: false
        }
        return response;
      }
    }
    let common = 0;
    for (let i = 0; i < 4; i++) {
      if (unique.has(this.gameWord.charAt(i))) {
        common++;
      }
      if (this.gameWord.charAt(i) == guess.charAt(i)) {
        correct++;
      }
    }
    misplaced = common - correct;
    if (guess === this.gameWord) {
      match = true;
    }
    response = {
      valid: valid,
      misplaced: misplaced,
      correct: correct,
      match: match,
      guess: guess
    }
    return response;
  }
  getGameDetails() {
    return this.http.get(URL_CONSTANTS.API_BASE_URL + API_ENDPOINTS.GET_GAME_DETAILS, 
      { headers: this.headers }
    );
  }

  updateScore(name: string, score: number) {
    const body = {
      name: name,
      score: score
    }
    return this.http.post(URL_CONSTANTS.API_BASE_URL + API_ENDPOINTS.UPDATE_SCORE, body, { headers: this.headers});
  }

  getLeaderBoard() {
    return this.http.get(URL_CONSTANTS.API_BASE_URL + API_ENDPOINTS.GET_LEADERBOARD,
      { headers: this.headers });
  }
}
