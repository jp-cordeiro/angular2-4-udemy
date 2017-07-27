import {Component, OnInit} from '@angular/core';
import {GiphySearchService} from "../giphy-search.service";
import {Response} from "@angular/http";
import {Title} from "@angular/platform-browser";
import {Giphy} from "app/giphy/giphy-manual/giphy.type";

@Component({
    selector: 'giphy-manual',
    templateUrl: 'giphy-manual.component.html'
})

export class GiphyManualComponent implements OnInit {

    titulo = "Buscador de Gifs";

    gifs: Giphy[] = [];
    limit: string;
    term: string;

    constructor(private title: Title,private giphySearchService:GiphySearchService ) {
    }

    ngOnInit() {
        this.title.setTitle("Buscador de Gifs");
    }

    pesquisarGiphy(){
        this.giphySearchService.pesquisarGiphy(this.limit,this.term).subscribe((response: Response) => {
            this.gifs = response.json().data;
        });

        
    }
}