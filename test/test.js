'use strict';
const expect = require('chai').expect;
const { getQueryObject } = require('../dist/index');

describe('ts-hi function test', () => {
  it('should return 2', () => {
    let url = 'http://www.woaiyhl.com?name=lhw&age=12'
    console.log(getQueryObject(url))
  });
});

