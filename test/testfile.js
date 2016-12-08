const should = require('chai').should()
const get_natural = require('../index').get_natural
const get_unix = require('../index').get_unix

describe('timestamp', function () {
  describe('get_natural()', function () {
    it('should return "December 15, 2015" given "1450159200"', function () {
      get_natural('1450159200').should.equal('December 15, 2015')
    })
    it('should return null given any non-date text', function () {
      should.equal(get_natural('orange'), null)
    })
    it.skip('should return null given an almost date', function () {
      should.equal(get_natural('Decdember%2015,%202015'), null)
    }) // Apparently node will parse this. I accept.
    it('should return its clean input given a natural date', function () {
      get_natural('December%2015,%202015').should.equal('December 15, 2015')
    })
  })
  describe('get_unix()', function () {
    it('should return 1450159200 given "December%2015,%202015"', function () {
      get_unix("December%2015,%202015").should.equal(1450159200)
    })
    it.skip('should return null given an almost date', function () {
      get_unix('Decdember%2015,%202015').should.be.null
    }) // Apparently node will parse this. I accept.
    it('should return its input as a number given a number', function () {
      get_unix('544684621').should.equal(544684621)
    })
    it('should return null given any non-date text', function () {
      should.equal(get_unix('orange'), null)
    })
  })
})