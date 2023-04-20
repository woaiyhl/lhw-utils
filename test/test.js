"use strict"
const expect = require("chai").expect
const { deleteInvalidDeep } = require("../dist/index")

describe("ts-hi function test", () => {
  it("should return 2", () => {
    let obj = {
      a: null,
      b: undefined,
      c: 0,
      d: false,
      e: NaN,
      f: [],
      g: {},
      h: ['',1,'false',undefined,null,0],
      i: {
        a: null,
        b: undefined,
        c: 0,
        d: false,
        e: NaN,
        f: [],
        g: {},
        h: 1,
        i: {
          a: null,
          b: [{a:0}]
        }
      }
    }
    console.log(deleteInvalidDeep(obj),'ooo')
  })
})
