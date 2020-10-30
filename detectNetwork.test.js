/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
// A Mocha test is just a function!
// If the function throws an error when run, it fails.
// If it doesn't throw an error when run, it doesn't fail.
// To read more about mocha, visit mochajs.org

// Once you've read and understood this section, please comment it out.
// You will not be able to proceed with a failing test.

// it('Throws an error so it fails', function() {
//   throw new Error('Delete me!');
// });

// it('Doesn\'t throw an error, so it doesn\'t fail', function() {
// This test doesn't really test anything at all! It will pass no matter what.
//   var even = function(num) {
//     return num / 2 === 0;
//   };
//   return even(10) === true;
// });

// In tests, we want to compare the expected behavior to the actual behavior.
// A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num) {
//       return num / 2 === 0;
//     };

//     if (even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
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

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

describe('China UnionPay', function () {
  var expect = chai.expect;
  // 622126 - 622925
  for (let prefix = 622126; prefix <= 622925; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '7649789045')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 622126; prefix <= 622925; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 17', function () {
      expect(detectNetwork(prefix + '76497890459')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 622126; prefix <= 622925; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '764978904596')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 622126; prefix <= 622925; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '7649789045957')).to.equal('China UnionPay');
    });
  }
  // 624 - 626
  for (let prefix = 624; prefix <= 626; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '7649789045342')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 624; prefix <= 626; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 17', function () {
      expect(detectNetwork(prefix + '76497894675382')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 624; prefix <= 626; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '764978946753824')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 624; prefix <= 626; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '7649789467538245')).to.equal('China UnionPay');
    });
  }
  // 6282 - 6288
  for (let prefix = 6282; prefix <= 6288; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + '764978904545')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 6282; prefix <= 6288; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 17', function () {
      expect(detectNetwork(prefix + '7649789045453')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 6282; prefix <= 6288; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix + '76497890454545')).to.equal('China UnionPay');
    });
  }
  for (let prefix = 6282; prefix <= 6288; prefix++) {
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix + '764978904545234')).to.equal('China UnionPay');
    });
  }
});

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

describe('Switch', function () {
  var expect = chai.expect;
  // length of 16
  it('has a prefix of 4903 and a length of 16', function () {
    expect(detectNetwork('4903764978904545')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 16', function () {
    expect(detectNetwork('4905764978904545')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 16', function () {
    expect(detectNetwork('4911764978904545')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 16', function () {
    expect(detectNetwork('4936764978904545')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 16', function () {
    expect(detectNetwork('5641827649789545')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 16', function () {
    expect(detectNetwork('6331106497890545')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function () {
    expect(detectNetwork('6333764978904545')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function () {
    expect(detectNetwork('6759764978904545')).to.equal('Switch');
  });
  // length of 18
  it('has a prefix of 4903 and a length of 18', function () {
    expect(detectNetwork('490376497890456545')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function () {
    expect(detectNetwork('490576497890455645')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function () {
    expect(detectNetwork('491176497890455645')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function () {
    expect(detectNetwork('493676497890456545')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function () {
    expect(detectNetwork('564182764978967545')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function () {
    expect(detectNetwork('633110649789780545')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function () {
    expect(detectNetwork('633376497890455645')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function () {
    expect(detectNetwork('675976497890354545')).to.equal('Switch');
  });
  // length of 19
  it('has a prefix of 4903 and a length of 19', function () {
    expect(detectNetwork('4903764978904556745')).to.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function () {
    expect(detectNetwork('4905764978456904545')).to.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function () {
    expect(detectNetwork('4911764972358904545')).to.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function () {
    expect(detectNetwork('4936764978578904545')).to.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function () {
    expect(detectNetwork('5641827456649789545')).to.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function () {
    expect(detectNetwork('6331106497678890545')).to.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function () {
    expect(detectNetwork('6333764956778904545')).to.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function () {
    expect(detectNetwork('6759764945678904545')).to.equal('Switch');
  });
});