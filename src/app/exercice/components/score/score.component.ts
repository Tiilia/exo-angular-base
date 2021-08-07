import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  public get team1name(): string { return this._scoreService.teamNames[0] }
  public get team1score(): number { return this._scoreService.teamScores[0] }
  public get team2name(): string { return this._scoreService.teamNames[1] }
  public get team2score(): number { return this._scoreService.teamScores[1] }

  constructor(private _scoreService: ScoreService) { }

  ngOnInit(): void {
  }

}
