export class TableSample {

    public employeeCode: string;
    public firstName: string;
    public jobTitle: string;
    public lastName: string;
    public storeName: string;
    public email: string;

    public get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    constructor(
        employeeCode: string = ''
        , firstName: string = ''
        , lastName: string = ''
        , jobTitle: string = ''
        , storeName: string = ''
        , email: string = ''
    ) {
        this.employeeCode = employeeCode;
        this.firstName = firstName;
        this.jobTitle = jobTitle;
        this.lastName = lastName;
        this.storeName = storeName;
        this.email = email;
    }
}
