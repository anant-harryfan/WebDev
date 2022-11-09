console.log("This is tutorial 31, thanks code with harry")


class Employeen {
    constructor(Name, experiance, division) {
            this.Name = Name;
            this.experiance = experiance;
            this.division = division;
    }
    slogan(){
        return `I Am ${this.Name} and this company is best, my experiance is ${this.experiance}`
    }
    join(){
        return 2020 - this.experiance;
    }
    static add(a,b){
        return a + b;       
    }
}

class Programmer extends Employeen {
    constructor(Name, experiance, division, language){
        super(Name, experiance, division);
        this.language = language;
    }
     favLanguage(){
        if(this.language == 'python'){
            return `your fav lang is python, or koi ye dada giri nahi hai tune hi likhe hai, to me ya karu, varna bolega "Teri dada giri nikal dunga me"`;
        }
        else{
            return `you fav lang is javascript , yaha pe dada giri hai or tu meri dada giri nahi nikal sakta anant the coder`
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

anant = new Employeen(`Anant`, 1, `programmer`);

// console.log(`you join code with harry in `+ anant.join());

// console.log(Employeen.add(34, 67))

vihaan = new Programmer('VIHAAN', 1,'pagalo ka bap', 'python')
console.log(vihaan)
console.log(vihaan.favLanguage())
