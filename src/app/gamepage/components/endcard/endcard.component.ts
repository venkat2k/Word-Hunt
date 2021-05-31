import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endcard',
  templateUrl: './endcard.component.html',
  styleUrls: ['./endcard.component.scss']
})
export class EndcardComponent implements OnInit {
  showEndCard = false;
  constructor() { }

  ngOnInit(): void {
  }

  completeGame() {
    this.showEndCard = true;
  }

}
