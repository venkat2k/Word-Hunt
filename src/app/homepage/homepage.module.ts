import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { CardComponent } from './components/card/card.component';
import { RulesComponent } from './components/rules/rules.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomepageComponent,
    CardComponent,
    RulesComponent,
    LeaderboardComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
  ]
})
export class HomepageModule { }
