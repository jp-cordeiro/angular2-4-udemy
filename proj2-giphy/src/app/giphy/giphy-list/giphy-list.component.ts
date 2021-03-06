import {Component, Input, OnInit} from '@angular/core';
import {Giphy} from "../giphy-manual/giphy.type";

@Component({
  selector: 'giphy-list',
  templateUrl: 'giphy-list.component.html'
})
export class GiphyListComponent implements OnInit {

  @Input()
  /**
   * Dados que vem do componente GiphyManual
   * @type {Array}
   */
  gifsList: Giphy[] = []

  constructor() { }

  ngOnInit() {
  }

}
