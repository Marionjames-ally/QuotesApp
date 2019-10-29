export class Quote {
   showDetails: boolean;
    constructor(
    public id:number,
    public quote:string,
    public author:string,
    public Date:Date,
    public upVote:number,
    public downVote:number,){

        this.showDetails=false;
    }
}
