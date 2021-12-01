import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

// Components
import { DynamicTableComponent } from './dynamic-table.component';

@NgModule({
    declarations: [
        DynamicTableComponent
    ],
    exports: [
        DynamicTableComponent
    ],
    imports: [
        CommonModule,
        CdkTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ]
})
export class DynamicTableModule { }
