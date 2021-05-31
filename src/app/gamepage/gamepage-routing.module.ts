import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamepageComponent } from './gamepage.component';

const routes: Routes = [
  {
    path: ':id',
    component: GamepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamepageRoutingModule { }
