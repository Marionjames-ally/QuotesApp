export class Quote {
    public showInfo: boolean;
    constructor(public id :number, public quote :string, public name :string, public postDate :Date, public downVote :number, public upVote :number){
        this.showInfo = false;
    }

    
}
