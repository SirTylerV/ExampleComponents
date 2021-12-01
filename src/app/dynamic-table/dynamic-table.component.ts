import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortable, MatSortHeader, Sort, SortDirection } from '@angular/material/sort';
import { ColumnConfig } from './classes/ColumnConfig';
import { SortDirectionEnum } from './classes/SortDirectionEnum';
import { SortOptions } from './classes/SortOptions';

@Component({
    selector: 'dynamic-table',
    templateUrl: './dynamic-table.component.html',
    styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

    @Input() public columnConfigs: ColumnConfig[];
    @Input() public items: object[];
    @Input() public sortOptions: SortOptions;

    public displayItems: object[];
    public displayHeaders: string[];
    public orderedColumnConfigs: ColumnConfig[];

    constructor() {
        this.columnConfigs = [];
        this.displayHeaders = [];
        this.displayItems = [];
        this.items = [];
        this.orderedColumnConfigs = [];
        this.sortOptions = new SortOptions();
    }

    public ngOnInit(): void {
        this.establishTableHeader();
        this.sortData();
    }

    public getData(item: any, columnConfig: ColumnConfig): string {
        return item[columnConfig.property];
    }

    public getSortDirection(): SortDirection  {
        return this.sortOptions.direction;
    }

    public updatePage(event: PageEvent): void {
        this.sortOptions.pageNumber = event.pageIndex;
        this.sortOptions.pageSize = event.pageSize;
        this.sortData();
    }

    public updateSortOptions(sortData: Sort): void {
        this.sortOptions.property = sortData.active;
        this.sortOptions.direction = sortData.direction as 'asc' | 'desc';
        // Update to the fist page on resort
        this.sortOptions.pageNumber = 0;
        this.sortData();
    }

    private establishTableHeader() {
        this.orderedColumnConfigs = this.columnConfigs.sort(cc => cc.order);
        this.displayHeaders = this.orderedColumnConfigs.map(occ => occ.headerTitle);
    }

    private sortData() {
        var start = this.sortOptions.pageSize * this.sortOptions.pageNumber;
        var end = start + this.sortOptions.pageSize;
        this.displayItems = this.items
            .sort(this.objectSort.bind(this))
            .slice(start, end)
    }

    private objectSort(a: any, b: any): number {
        // Getting the property and converting to string then uppercase to ignore case
        var propertyA = a[this.sortOptions.property].toString().toUpperCase();
        var propertyB = b[this.sortOptions.property].toString().toUpperCase();

        return this.sortCompare(propertyA, propertyB, this.sortOptions.direction === SortDirectionEnum.ascending);
    }

    private sortCompare(a: any, b: any, isAscending: boolean): number {
        return a !== b
            ? (a < b ? -1 : 1) * (isAscending ? 1 : -1)
            : 0;
    }
}
