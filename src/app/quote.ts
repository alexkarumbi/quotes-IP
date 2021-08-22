export class Quote {
    showDetails:boolean
    constructor(public id :number, public name :string,public author :string,public fan :string ,public upvotes :number ,public downvotes :number , public notedDate:Date  ){
        this.showDetails=false
    }
}
