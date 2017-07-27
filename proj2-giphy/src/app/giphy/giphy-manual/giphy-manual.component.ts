import {Component, OnInit} from '@angular/core';
import {GiphySearchService} from "../giphy-search.service";
import {Response} from "@angular/http";

@Component({
    selector: 'giphy-manual',
    templateUrl: 'giphy-manual.component.html'
})

export class GiphyManualComponent implements OnInit {
    titulo = "Buscador de Gifs";

    gifs: any[] = [];
    limit: string;
    term: string;

    constructor(private giphySearchService:GiphySearchService ) {
    }

    ngOnInit() {
    }

    pesquisarGiphy(){
        this.giphySearchService.pesquisarGiphy(this.limit,this.term).subscribe((response: Response) => {
            this.gifs = response.json().data;
        });

        
    }
}