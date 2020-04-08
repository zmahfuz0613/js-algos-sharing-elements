let algos = require("../sharingElements.js")

test("shares the array elements with new arrays consisting of a maximum of num", () => {
  expect(algos.groupArrays(["a", "b", "c", "d"], 4)).toMatchObject([
    ["a", "b", "c", "d"]
  ])
  expect(algos.groupArrays(["a", "b", "c", "d"], 3)).toMatchObject([
    ["a", "b", "c"],
    ["d"]
  ])
  expect(algos.groupArrays(["a", "b", "c", "d"], 2)).toMatchObject([
    ["a", "b"],
    ["c", "d"]
  ])
})
