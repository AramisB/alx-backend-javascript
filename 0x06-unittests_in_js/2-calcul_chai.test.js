import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);  // 1 + 5 = 6
      expect(calculateNumber('SUM', 2.7, 3.2)).to.equal(6);  // 3 + 3 = 6
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 5.8, 2.1)).to.equal(4);  // 6 - 2 = 4
      expect(calculateNumber('SUBTRACT', 1.4, 3.5)).to.equal(-3);  // 1 - 4 = -3
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of two rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 8.4, 2.1)).to.equal(4);  // 8 / 2 = 4
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 5.2, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5.2, 0.2)).to.equal('Error');  // Rounded to 0
    });
  });
});