
import * as index from "../src/index.js";

test("add Team", () => {
    const character = new index.Character("Gena");
    const team = new index.Team();
    team.add(character);
    const result = team.members;
    const expected = new Set();
    expect(result.members).toEqual(expected);
})
test("addAll Team", () => {
    const gena = new index.Character("Gena");
    const frodo = new index.Character("Frodo");

    const result = new index.Team().add(gena, frodo);
    const expected = [gena, frodo];
    expect(result.members).toEqual(expected);
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
    expected.set("404", "not found");
    expect(result.error).toEqual(expected);
})
test("translate", () => {
    const error = new index.ErrorRepository("404", "not found");
    const result = error.translate("500");
    const expected = "Unknown error";
    expect(result).toEqual(expected);
})
