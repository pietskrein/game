import { Component, OnInit, Input } from '@angular/core';
import { DialogComponent } from 'src/app/dialog/dialog/dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor() { }

  private currentText: string = "Welcome..."

  next() {
    this.currentText = "Goodbye"
  }

  ngOnInit() {
  }

}
