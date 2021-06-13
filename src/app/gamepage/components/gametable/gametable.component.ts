import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameplayService } from 'src/app/core/services/gameplay.service';
import { GamepageComponent } from '../../gamepage.component';

@Component({
  selector: 'app-gametable',
  templateUrl: './gametable.component.html',
  styleUrls: ['./gametable.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class GametableComponent implements OnInit {
  entries: any[] = [];
  gameId: string;
  userGuess = '';
  constructor(private router: Router, private gameService: GameplayService, private gamepage: GamepageComponent) { }

  ngOnInit(): void {
    let url = this.router.url;
    this.gameId = url.split("/").pop();
  }

  validateGuess(guess: string) {
    if (guess == '') {
      return ;
    }
    this.userGuess = '';
    this.gameService.validateGuess(guess, this.gameId)
      .subscribe((data) => {
        this.entries.push(data);
        let score = this.gamepage.updateScore();
        this.scrollBottom();
        if (data['match'] == true || score == 0) {
          this.gamepage.completeGame();
          const playerName = localStorage.getItem('playerName');
          this.gameService.updateScore(playerName, score).subscribe();
        }
      })
  }
  scrollBottom() {
    let tableContainer = Array.from(document.getElementsByClassName("gameTable") as HTMLCollectionOf <HTMLElement>);
    tableContainer[0].scrollTop = 25000;
  }
}
