export class ColumnConfig {

    public cssStyles: string;
    public headerTitle: string;
    public property: string;
    public order: number;
    public isSortable: boolean;

    constructor(
        cssStyles: string = '',
        headerTitle: string = '',
        order: number = 0,
        property: string = '',
        isSortable: boolean = true
    ) {
        this.cssStyles = cssStyles;
        this.headerTitle = headerTitle;
        this.order = order;
        this.property = property;
        this.isSortable = isSortable;
    }
}
