import {NgModule} from '@angular/core';

import {GiphyManualComponent} from './giphy-manual.component';
import {GiphySearchService} from "../giphy-search.service";
import {ShareModule} from "../../share/share.module";

@NgModule({
    imports: [ShareModule],
    exports: [GiphyManualComponent],
    declarations: [GiphyManualComponent],
    providers: [GiphySearchService],
})
export class GiphyManualModule {
}
