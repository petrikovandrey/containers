export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        this.members.set(character);
    }
    addAll(...array) {
        array.forEach(element => {
            this.members.set(element);
        });
    }
    toArray(mySet) {
        return Array.from(mySet);
    }
}

