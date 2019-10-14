


class Human {
    constructor(banana) {
        this.name = banana;
        this.age = 38;
    }
    speak() {
        console.log("some phrase")
    }

} 




class MutantHuman extends Human {
    constructor(banana) {
        super(banana);

    }

    mutantPower(typeOfPower) {
        console.log(typeOfPower + " hits for 1000 points")
    }

}



const cyclops = new MutantHuman();
const storm = new MutantHuman();

cyclops.speak();
cyclops.mutantPower("laser beam");





