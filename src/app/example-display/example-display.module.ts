import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ExampleDisplayComponent } from './example-display.component';
// Modules
import { DynamicTableModule } from '../dynamic-table/dynamic-table.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        ExampleDisplayComponent
    ],
    imports: [
        CommonModule,
        DynamicTableModule,
        MatGridListModule,
        MatTabsModule
    ]
})
export class ExampleDisplayModule { }
