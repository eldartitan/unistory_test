interface IMeta {
    currentPage: Number;
    perPage: Number;
    totalPages: Number;
}

interface IData {
    id:	Number;
    username:	String;
    email:	String;
    address:	String;
}

interface IQuery {
    meta: IMeta;
    items: IData[];
}

interface IAccount {
    account: String | undefined
}

export type {
    IMeta,
    IData,
    IQuery,
    IAccount
}