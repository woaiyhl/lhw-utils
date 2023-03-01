"use strict"
const expect = require("chai").expect
const { deleteInvalid, deletePrimitiveInvalid, isEmpty } = require("../dist/index")

describe("ts-hi function test", () => {
  it("should return 2", () => {
    let obj = {
      b: 0,
      c: false,
      d: null,
      e: undefined,
      f: [],
      g: {},
    }
    console.log(deleteInvalid(obj), obj, "ooo")
  })
})
