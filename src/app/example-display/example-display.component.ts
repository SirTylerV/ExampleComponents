import { Component, OnInit } from '@angular/core';
import { DynamicTableService } from './services/dynamic-table.service';

@Component({
    selector: 'example-display',
    templateUrl: './example-display.component.html',
    styleUrls: ['./example-display.component.scss'],
    providers: [
        DynamicTableService
    ]
})
export class ExampleDisplayComponent implements OnInit {

    constructor(
        public dynamicTableService: DynamicTableService
    ) {
    }

    public ngOnInit(): void {
        this.dynamicTableService.populateData();
    }

}
