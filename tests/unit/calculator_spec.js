var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add two numbers together', function () {
    calculator.previousTotal = 1;
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5)
  })

  it('can subtract two numbers together', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

  it('can multiply two numbers together', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15)
  })

});
