
import * as index from "../src/index.js";

test("add Team", () => {
    const character = new index.Character("Gena");
    const team = new index.Team();
    team.add(character);
    const result = team.members;
    const expected = new Set();
    expected.add(character);
    expect(result).toEqual(expected);
})
test("duble add", () => {
    const character = new index.Character("Gena");
    const team = new index.Team();
    const expected = "Персонаж уже добавлен";
    team.add(character);
    expect(team.add(character)).toBe(expected);
})
test("addAll Team", () => {
    const gena = new index.Character("Gena");
    const frodo = new index.Character("Frodo");

    const team = new index.Team();
    team.addAll(gena, frodo);
    const result = team.members;

    const expected = new Set();
    expected.add(gena);
    expected.add(frodo);
    expect(result).toEqual(expected);
})

test("to Array", () => {
    let set = new Set;
    const result = new index.Team().toArray(set);
    const expected = [];
    expect(result).toEqual(expected);
})

