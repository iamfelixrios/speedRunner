import { Component, OnInit } from '@angular/core';
import { SpeedrunDataService } from '../../services/speedrun-data.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allGames: Game[];
  errorMsg: string;
  isReady: boolean = false;

  constructor(private speedrunDataService: SpeedrunDataService) {}

  ngOnInit() {
    this.getGames()
  }

  getGames(): void {
    this.speedrunDataService
      .getGames()
      .then(games => {
        this.allGames = games;
        this.isReady = true;
      })
      .catch(error => {
        this.errorMsg = error;
        this.isReady = true;
      })
  }
}
