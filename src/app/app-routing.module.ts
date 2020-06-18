import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GameComponent} from './game/game/game.component';
import { DialogComponent } from './dialog/dialog/dialog.component';

const routes: Routes = [
  {path: '', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
