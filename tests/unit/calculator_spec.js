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

  it('can subtract one number from another', function () {
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

  it('can divide one number by another', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

  // integration tests

  it('can concatenate multiple number button clicks', function () {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    const actual = calculator.runningTotal;
    assert.equal(actual, 123)
  })

  it('can chain multiple operations together', function () {
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal;
    assert.equal(actual, 7)
  })

  it('can clear the running total without affecting the calculation', function () {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(6)
    calculator.clearClick()
    calculator.operatorClick('=')
    const actual = calculator.runningTotal;
    assert.equal(actual, 2)
  })

  it("can return 'not a number' if number is divided by 0", function () {
    calculator.numberClick(2)
    calculator.operatorClick('/')
    calculator.numberClick(0)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal;
    assert.equal(calculator.runningTotal, 'Not a number')
  })
});
