import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public links: Link[];

  constructor() {
    this.links = [];
  }

  ngOnInit(): void {
    this.links.push(new Link('Demo', '/demo'))
    this.links.push(new Link('--------'))
    this.links.push(new Link('Exercices', '/exercice', [
      new Link('--------'),
      new Link('Chonomètre', '/chrono'),
      new Link('--------'),
      new Link('Tableau de score', '/score'),
    ]));
  }

}
