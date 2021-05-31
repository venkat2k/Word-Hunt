import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameplayService } from 'src/app/core/services/gameplay.service';

@Component({
  selector: 'app-navicons',
  templateUrl: './navicons.component.html',
  styleUrls: ['./navicons.component.scss']
})
export class NaviconsComponent implements OnInit {

  constructor(private router: Router, private gameplayService: GameplayService) { }

  ngOnInit(): void {
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
