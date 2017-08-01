import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../models/game'

@Component({
  selector: 'app-run-listing',
  templateUrl: './run-listing.component.html',
  styleUrls: ['./run-listing.component.css']
})

export class RunListingComponent implements OnInit {
  @Input() games: Game[];
  activeGame: Game;
  isOpen: boolean = false;

  constructor() {
   }

  ngOnInit() {
  }

  selectGame(selectedGame): void {
    this.activeGame = selectedGame;
    this.isOpen = true;
  }

  unselectGame(): void {
    this.isOpen = false;
    this.activeGame = null;
    console.log(this.activeGame);
  }

}
