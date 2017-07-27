import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GiphyManualComponent} from './giphy-manual.component';

const routes: Routes = [
    {path: '', component: GiphyManualComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GiphyManualRoutingModule {
}