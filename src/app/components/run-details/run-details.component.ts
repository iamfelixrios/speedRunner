import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpeedrunDetailDataService } from '../../services/speedrun-detail-data.service';
import { SpeedrunUserDataService } from '../../services/speedrun-user-data.service';
import { Game } from '../../models/game'
import { Speedrun } from '../../models/speedrun'
import { User } from '../../models/user'

@Component({
  selector: 'app-run-details',
  templateUrl: './run-details.component.html',
  styleUrls: ['./run-details.component.css']
})
export class RunDetailsComponent implements OnInit {
  @Input() game: Game;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  allRuns: Speedrun[];
  lastRun: Speedrun;
  user: User;
  errorMsg: string;
  isReady: boolean = false;

  constructor(
    private speedrunDetailDataService: SpeedrunDetailDataService,
    private speedrunUserDataService: SpeedrunUserDataService
  ) { }

  ngOnInit() {
    this.getRuns(this.game.id);
  }

  closePopUp() {
      this.onClose.emit();
  }

  getUser(userId): void {
      this.speedrunUserDataService
        .getUser(userId)
        .then(user => {
          this.user = user;
          this.isReady = true;
        })
        .catch(error => {
          this.errorMsg = error;
          this.isReady = true;
        })
  }

  getRuns(gameId): void {
    this.speedrunDetailDataService
      .getRuns(gameId)
      .then(runs => {
        this.allRuns = runs;
        this.isReady = true;
        this.lastRun = runs[0] || null;
        if (this.lastRun)
          this.getUser(this.lastRun['players'][0].id)
        else
          this.isReady = true;
      })
      .catch(error => {
        this.errorMsg = error;
        this.isReady = true;
      })
  }
}
