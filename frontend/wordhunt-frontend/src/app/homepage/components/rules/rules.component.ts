import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../../homepage.component';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  constructor(private homepage: HomepageComponent) { }

  ngOnInit(): void {
  }
  closeRules() {
    this.homepage.closeRules();
    let homeContainer = Array.from(document.getElementsByClassName("cardContainer") as HTMLCollectionOf <HTMLElement>);
    homeContainer[0].style.filter = 'blur(0em)';
    homeContainer[0].style.pointerEvents = 'all';
  }
}
