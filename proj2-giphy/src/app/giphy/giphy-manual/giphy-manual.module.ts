import {NgModule} from '@angular/core';

import {GiphyManualComponent} from './giphy-manual.component';
import {GiphySearchService} from "../giphy-search.service";
import {ShareModule} from "../../share/share.module";
import {GiphyListModule} from "../giphy-list/giphy-list.module";
import {GiphyManualRoutingModule} from "./giphy-manual-routing.module";

@NgModule({
    imports: [ShareModule,GiphyListModule,GiphyManualRoutingModule],
    exports: [GiphyManualComponent],
    declarations: [GiphyManualComponent],
    providers: [GiphySearchService],
})
export class GiphyManualModule {
}
