export class Hero {
    public name: string;
    public role : string;
    public imageURL : string;
    public weakAgainst: Hero[];
    public selected: boolean;
    public enemySelected: boolean;
    
    constructor(name: string, role: string, imageURL: string){
        this.name = name;
        this.role = role;
        this.imageURL = imageURL;
        this.selected = false;
        this.enemySelected = false;
    }

    addWeakAgainst(weakAgainst: Hero[]){
        this.weakAgainst = weakAgainst;
    }
}