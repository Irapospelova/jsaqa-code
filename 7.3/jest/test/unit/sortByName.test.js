const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

it("Books names should be sorted in descending order", () => {
  const input = ["Властелин Колец", "Волшебник изумрудного города", "Гарри Поттер"];
  const expected = ["Властелин Колец", "Волшебник изумрудного города", "Гарри Поттер"];
  expect(sorting.sortByName(input)).toEqual(expected);
});

it("Might have an empty array", () => {
  const input = [];
  const expected = [];
  expect(sorting.sortByName(input)).toEqual(expected);
});

it("Should return 0 when names are equal", () => {
  const input = ["Гарри Поттер", "гарри поттер"];
  const expected = input;
  expect(sorting.sortByName(input)).toEqual(expected); 
});

});
