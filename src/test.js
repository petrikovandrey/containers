
import * as index from "../src/index.js";

test("add Team", () => {
    const character = new index.Character("Gena");
    const result = new index.Team().add(character);
    const expected =
        { "health": 100, "level": 1, "name": "Gena", "attack": 25, "defence": 25 };
    expect(result).toEqual(expected);
})
test("addAll Team", () => {
    const gena = new index.Character("Gena");
    const frodo = new index.Character("Frodo");

    const result = new index.Team().add(gena, frodo);
    const expected = "нельзя повысить левел умершего";
    expect(result).toEqual(expected);
})
test("to Array", () => {
    let set = new Set;
    const result = new index.Team().toArray(set);
    const expected = [];
    expect(result).toEqual(expected);
})
test("new error", () => { 
    const result = new index.ErrorRepository("404", "not found");
    const expected = new Map;
    expected.set("404","not found");
    expect(result.error).toEqual(expected);
})
test("translate", () => {
    const error = new index.ErrorRepository("404", "not found");
    const result = error.translate("500");
    const expected = "Unknown error";
    expect(result).toEqual(expected);
})
