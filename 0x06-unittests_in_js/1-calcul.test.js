const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);  // 1 + 5 = 6
      assert.strictEqual(calculateNumber('SUM', 2.7, 3.2), 6);  // 3 + 3 = 6
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 2.1), 4);  // 6 - 2 = 4
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), -3);  // 1 - 3 = -2
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of two rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.1), 4);  // 8 / 2 = 4
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.2, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.2, 0.2), 'Error');  // Rounded to 0
    });
  });
});