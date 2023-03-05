"use strict"
const expect = require("chai").expect
const { isNotNegativeInteger } = require("../dist/index")

describe("ts-hi function test", () => {
  it("should return 2", () => {
    let a = -1
    let b = 0
    let c = 1.1
    let d = "1"
    let e = "1.1"
    let f = "wo"
    let g = "0"
    console.log(isNotNegativeInteger(a))
    console.log(isNotNegativeInteger(b))
    console.log(isNotNegativeInteger(c))
    console.log(isNotNegativeInteger(d))
    console.log(isNotNegativeInteger(e))
    console.log(isNotNegativeInteger(f))
    console.log(isNotNegativeInteger(g))
  })
})
