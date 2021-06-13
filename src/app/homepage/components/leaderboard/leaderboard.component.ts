import { Component, OnInit } from '@angular/core';
import { GameplayService } from 'src/app/core/services/gameplay.service';
import { HomepageComponent } from '../../homepage.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class LeaderboardComponent implements OnInit {

  leaderBoardData = [];
  constructor(private gameService: GameplayService, private homepage: HomepageComponent) { }

  ngOnInit(): void {
    this.gameService.getLeaderBoard().subscribe((data) => {
      this.leaderBoardData = data['result'];
    })
  }
  closeLeaderBoard() {
    this.homepage.closeLeaderBoard();
    let homeContainer = Array.from(document.getElementsByClassName("cardContainer") as HTMLCollectionOf <HTMLElement>);
    homeContainer[0].style.filter = 'blur(0em)';
    homeContainer[0].style.pointerEvents = 'all';
  }
}
