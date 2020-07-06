
import * as index from "../src/index.js";

test("new Bowerman", () => {
    const result = new index.Bowerman("Gena", 25, 25);
    const expected =
        { "health": 100, "level": 1, "name": "Gena", "attack": 25, "defence": 25 };
    expect(result).toEqual(expected);
})
test("levelUp Bowerman health = 0 ", () => {
    const person = new index.Bowerman("Gena", 25, 25);
    person.health = 0;
    const result = person.levelUp();
    const expected = "нельзя повысить левел умершего";
    expect(result).toEqual(expected);
})
test("level up Bowerman", () => {
    const person = new index.Bowerman("Gena", 25, 25);
    person.levelUp();
    const expected =
        { "health": 100, "level": 2, "name": "Gena", "attack": 30, "defence": 30 };
    expect(person).toEqual(expected);
})
