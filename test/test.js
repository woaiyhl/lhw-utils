'use strict';
const expect = require('chai').expect;
const randomUniqueIntArrInRange = require('../dist/index').randomUniqueIntArrInRange;
 
describe('ts-hi function test', () => {
  it('should return 2', () => {
    const result = randomUniqueIntArrInRange(1, 10);
    console.log(result);
  });
});