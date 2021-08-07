import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public teamNames: string[] = ["Bleu", "Rouge"];
  public teamScores: number[] = [0, 0];

  constructor() { }

  public addOneTo(teamName: string) {
    let found: boolean = false;
    let i;
    for (i = 0; i < this.teamNames.length && found === false; i++) {
      if (teamName === this.teamNames[i]) found = true;
    }
    this.teamScores[i - 1]++;
  }
}
