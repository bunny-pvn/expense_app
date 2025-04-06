
export class Expense{
    
    constructor(
        public title:string,
        public amount:number,
        public category:string,
        public date:string,
        public id?: string
    )
    {

    }
}