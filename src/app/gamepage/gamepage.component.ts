import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameplayService } from '../core/services/gameplay.service';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss']
})
export class GamepageComponent implements OnInit {

  score = 100;
  showEndCard = false;
  constructor(private router: Router, private gameplayService: GameplayService) { }


  ngOnInit(): void {
  }

  updateScore() {
    this.score -= 2;
    return this.score;
  }

  completeGame() {
    this.showEndCard = true;
    let container = Array.from(document.getElementsByClassName("gameContainer") as HTMLCollectionOf <HTMLElement>);
    container[0].style.filter = 'blur(2em)';
    container[0].style.pointerEvents = 'none';
  }

  goHome() {
    this.router.navigate(['/']);
  }

  restartGame() {
    this.gameplayService.getGameDetails().subscribe(
      (data) => {
        let gameId = data["gameId"];
        this.router.navigateByUrl('play/' + gameId.toString())
            .then(() => {
              window.location.reload();
            });
      }
    )
  }
}
