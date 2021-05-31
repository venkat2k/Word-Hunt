import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamepageRoutingModule } from './gamepage-routing.module';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { GamepageComponent } from './gamepage.component';
import { GametableComponent } from './components/gametable/gametable.component';
import { FormsModule } from '@angular/forms';
import { EndcardComponent } from './components/endcard/endcard.component';
import { NaviconsComponent } from './components/navicons/navicons.component';


@NgModule({
  declarations: [
    ScorecardComponent,
    GamepageComponent,
    GametableComponent,
    EndcardComponent,
    NaviconsComponent
  ],
  imports: [
    CommonModule,
    GamepageRoutingModule,
    FormsModule
  ]
})
export class GamepageModule { }
