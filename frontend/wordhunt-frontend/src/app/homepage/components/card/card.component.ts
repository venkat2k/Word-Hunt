import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() cardIcon: any;

  constructor() { }

  ngOnInit(): void {
    // this.cardTitle = 'hello';
    // this.cardIcon = 'hey';
  }

}
