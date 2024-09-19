import { expect } from 'chai';
import sinon from 'sinon';
import { Utils } from './utils.js';
import { sendPaymentRequestToApi } from './3-payment.js';

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    spy.restore(); // Restore the original method after each test
  });

  it('should call Utils.calculateNumber with the correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    
    // Ensure that the spy was called once with the correct arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});