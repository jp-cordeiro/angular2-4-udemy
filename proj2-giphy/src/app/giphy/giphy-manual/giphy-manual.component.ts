import {Component, OnInit} from '@angular/core';
import {GiphySearchService} from "../giphy-search.service";

@Component({
    selector: 'giphy-manual',
    templateUrl: 'giphy-manual.component.html'
})

export class GiphyManualComponent implements OnInit {
    titulo = "Buscador de Gifs";

    constructor(private giphySearchService:GiphySearchService ) {
    }

    ngOnInit() {
    }

    pesquisarGiphy(){
        this.giphySearchService.pesquisarGiphy("teste","teste");
    }
}