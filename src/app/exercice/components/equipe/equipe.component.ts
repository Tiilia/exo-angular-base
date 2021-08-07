import { ScoreService } from './../../services/score.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  @Input() teamName: string = "";


  constructor(private _sccoreService: ScoreService) { }

  ngOnInit(): void {
  }

  public addOnpoint() {
    this._sccoreService.addOneTo(this.teamName)
  }
}
