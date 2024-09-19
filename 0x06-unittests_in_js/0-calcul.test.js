const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);  // 1 + 5 = 6
    assert.strictEqual(calculateNumber(2.7, 3.2), 6);  // 3 + 3 = 6
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);  // 2 + 4 = 6
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.4, 4.5), 4); // -1 + 5 = 4
    assert.strictEqual(calculateNumber(-2.7, -3.2), -6); // -3 + -3 = -6
  });

  it('should handle rounding of whole numbers', function() {
    assert.strictEqual(calculateNumber(2, 3), 5); // 2 + 3 = 5
  });
});