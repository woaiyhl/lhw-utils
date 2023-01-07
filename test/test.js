'use strict';
const expect = require('chai').expect;
const { uniqueDeep,unique } = require('../dist/index');

describe('ts-hi function test', () => {
  it('should return 2', () => {
    let arr = [
      {
        a: 1
      },
      {
        a:1
      },{
        a:2
      }
    ]
    console.log(uniqueDeep(arr));
  });
});

