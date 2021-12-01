import { SortDirectionEnum } from "./SortDirectionEnum";

export class SortOptions {

    public direction: 'asc' | 'desc';
    public property: string;
    public pageNumber: number;
    public pageSize: number;
    public pageSizeOptions: number[];

    constructor(
        direction: 'asc' | 'desc' = SortDirectionEnum.ascending,
        property: string = '',
        pageNumber: number = 0,
        pageSize: number = 25,
        pageSizeOptions: number[] = [5, 10, 25, 50]
    ) {
        this.direction = direction;
        this.property = property;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.pageSizeOptions = pageSizeOptions;
    }
}
