import {NgModule} from '@angular/core';

import {GiphyManualComponent} from './giphy-manual.component';
import {GiphySearchService} from "../giphy-search.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [GiphyManualComponent],
    declarations: [GiphyManualComponent],
    providers: [GiphySearchService],
})
export class GiphyManualModule {
}
