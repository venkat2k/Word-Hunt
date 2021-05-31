import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameplayService } from '../core/services/gameplay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // cardDetails: any;
  title: string;
  showRules = false;
  showLeaderboard = false;
  startPlay = false;
  playerName = '';
  constructor(private gameplayService: GameplayService,
              private router: Router) { }

  ngOnInit(): void {

  }
  test() {
    console.log(this.showRules);
  }
  startGame() {
    localStorage.setItem('playerName', this.playerName);
    this.gameplayService.getGameDetails().subscribe(
      (data) => {
        let gameId = data["gameId"];
        this.router.navigate(['play/' + gameId.toString()]);
      }
    )
  }
  closeRules() {
    this.showRules = false;
  }
  hideBackground() {
    let container = Array.from(document.getElementsByClassName("cardContainer") as HTMLCollectionOf <HTMLElement>);
    container[0].style.filter = 'blur(2em)';
    container[0].style.pointerEvents = 'none';
    let rulesContainer = Array.from(document.getElementsByClassName("rulesContainer") as HTMLCollectionOf <HTMLElement>);
    rulesContainer[0].style.display = 'block';
  }
}


// reroute to new url think about making service call there.