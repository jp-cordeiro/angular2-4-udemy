import {NgModule} from '@angular/core';

import {GiphyManualComponent} from './giphy-manual.component';
import {GiphySearchService} from "../giphy-search.service";

@NgModule({
    imports: [],
    exports: [GiphyManualComponent],
    declarations: [GiphyManualComponent],
    providers: [GiphySearchService],
})
export class GiphyManualModule {
}
