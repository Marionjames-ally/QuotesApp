export class Quote {
   showDetails: boolean;
  static toBeTruthy: any;
    constructor(
    public id:number,
    public quote:string,
    public author:string,
    public postDate:Date,
    public upVote:number,
    public downVote:number,){

        this.showDetails=false;
    }
}
