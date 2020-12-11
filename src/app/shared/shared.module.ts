import { NgModule } from '@angular/core';

import { SearchStringPipe } from '../pipes/search-string.pipe';
import { SortGoodsPipe } from '../pipes/sort-goods.pipe';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import { StyleDirective } from '../directives/style.directive';

@NgModule({
    declarations: [
        SearchStringPipe,
        SortGoodsPipe,
        CategoryFilterPipe,
        StyleDirective,
    ],
    exports: [
        SearchStringPipe,
        SortGoodsPipe,
        CategoryFilterPipe,
        StyleDirective
    ]
})
export class SharedModule { }