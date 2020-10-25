/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function () {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function () {
    return 'Delete me!';
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function () {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function (num) {
      return num / 2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function () {
    var even = function (num) {
      return num % 2 === 0;
    };

    if (even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function () {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function () {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function () {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function () {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function (isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function () {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function () {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function () {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function () {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function () {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function () {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function () {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  for (let prefix = 51; prefix <= 55; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '12345678901234')).to.equal('MasterCard');
    });
  }
});

describe('Discover', function () {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function () {
    expect(detectNetwork('6011456789045632')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011456789045632678')).to.equal('Discover');
  });
  for (let prefix = 644; prefix <= 649; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '7649789045632')).to.equal('Discover');
    });
  }
  for (let prefix = 644; prefix <= 649; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '7649789045632874')).to.equal('Discover');
    });
  }
  it('has a prefix of 65 and a length of 16', function () {
    expect(detectNetwork('6511456789045632')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511456789045632678')).to.equal('Discover');
  });
});

describe('Maestro', function () {
  var expect = chai.expect;
  // Write full test coverage for the Maestro card
  // 5018
  it('has a prefix of 5018 and a length of 12', function () {
    expect(detectNetwork('501835689048')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function () {
    expect(detectNetwork('5018356890484')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function () {
    expect(detectNetwork('50183568904878')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function () {
    expect(detectNetwork('501835689048679')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function () {
    expect(detectNetwork('5018356890486793')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function () {
    expect(detectNetwork('50183568904867912')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function () {
    expect(detectNetwork('501835689048679335')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function () {
    expect(detectNetwork('5018356890486798953')).to.equal('Maestro');
  });
  // 5020
  it('has a prefix of 5020 and a length of 12', function () {
    expect(detectNetwork('502035689048')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function () {
    expect(detectNetwork('5020356890484')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function () {
    expect(detectNetwork('50203568904878')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function () {
    expect(detectNetwork('502035689048679')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function () {
    expect(detectNetwork('5020356890486793')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function () {
    expect(detectNetwork('50203568904867912')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function () {
    expect(detectNetwork('502035689048679335')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function () {
    expect(detectNetwork('5020356890486798953')).to.equal('Maestro');
  });
  // 5038
  it('has a prefix of 5038 and a length of 12', function () {
    expect(detectNetwork('503835689048')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function () {
    expect(detectNetwork('5038356890484')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function () {
    expect(detectNetwork('50383568904878')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function () {
    expect(detectNetwork('503835689048679')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function () {
    expect(detectNetwork('5038356890486793')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function () {
    expect(detectNetwork('50383568904867912')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function () {
    expect(detectNetwork('503835689048679335')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function () {
    expect(detectNetwork('5038356890486798953')).to.equal('Maestro');
  });
  // 6304
  it('has a prefix of 6304 and a length of 12', function () {
    expect(detectNetwork('630435689048')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function () {
    expect(detectNetwork('6304356890484')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function () {
    expect(detectNetwork('63043568904878')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function () {
    expect(detectNetwork('630435689048679')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function () {
    expect(detectNetwork('6304356890486793')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function () {
    expect(detectNetwork('63043568904867912')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function () {
    expect(detectNetwork('630435689048679335')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function () {
    expect(detectNetwork('6304356890486798953')).to.equal('Maestro');
  });
});

describe('China UnionPay', function () {

});