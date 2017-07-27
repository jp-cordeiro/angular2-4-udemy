import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {

  @Input()
  /**
   * Dados que vem do componente GiphyManual
   * @type {Array}
   */
  gifsList: any[] = []

  constructor() { }

  ngOnInit() {
  }

}
