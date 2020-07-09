export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        this.members.add(character);
    }
    addAll(...array) {
        array.forEach(element => {
            this.members.add(element);
        });
    }
    toArray(mySet) {
        return Array.from(mySet);
    }
}

export class ErrorRepository {
    constructor(code, description) {
        this.error = new Map;
        this.error.set(code, description)
    }
    translate(code) {
        if (this.error.has(code)) {
            return this.error.get(code);
        } else {
            return "Unknown error";
        }
    }
}

export class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
    levelUp() {
        console.log(this);
        if (this.health === 0) {
            return "нельзя повысить левел умершего";
        }
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
        console.log(this);
    }
}
