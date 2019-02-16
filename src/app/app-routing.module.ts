import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SevenSegmentToNumberComponent } from './seven-segment-to-number/seven-segment-to-number.component';
import { MarcoPoloGameComponent } from './marco-polo-game/marco-polo-game.component';
const routes: Routes = [
  // { path: '', redirectTo: 'marco-polo', pathMatch: 'full' },
  // {
  //   path: 'marco-polo',
  //   component: MarcoPoloGameComponent,
  //   data: { title: 'Marco Polo' }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
