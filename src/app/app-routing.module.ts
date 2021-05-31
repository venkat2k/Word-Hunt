import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'play',
    loadChildren: () =>
      import("./gamepage/gamepage.module").then((m) => m.GamepageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import("./homepage/homepage.module").then((m) => m.HomepageModule), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 