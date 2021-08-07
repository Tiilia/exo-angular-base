import { ScoreService } from './../../services/score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.scss']
})
export class PagePrincipaleComponent implements OnInit {

  public get teamNames(): string[] { return this._scoreService.teamNames }

  constructor(private _scoreService: ScoreService) { }

  ngOnInit(): void {
  }

}
