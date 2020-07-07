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