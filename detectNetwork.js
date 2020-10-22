// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long
// Once you've read this, go ahead and try to implement this function, then return to the console.

var detectNetwork = function (cardNumber) {
  // Note: `cardNumber` will always be a string
  const length = cardNumber.length;
  if (length === 13) {
    if (cardNumber.startsWith('4')) {
      return 'Visa';
    }
  }
  if (length === 14) {
    if (cardNumber.startsWith('38')) {
      return 'Diner\'s Club';
    } else if (cardNumber.startsWith('39')) {
      return 'Diner\'s Club';
    }
  }
  if (length === 15) {
    if (cardNumber.startsWith('34')) {
      return 'American Express';
    } else if (cardNumber.startsWith('37')) {
      return 'American Express';
    }
  }
  if (length === 16) {
    if (cardNumber.startsWith('4')) {
      return 'Visa';
    } else if (cardNumber.startsWith('6011')) {
      return 'Discover';
    } else if (cardNumber.startsWith('65')) {
      return 'Discover';
    } else if (cardNumber.startsWith('4903')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4905')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4911')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4936')) {
      return 'Switch';
    } else if (cardNumber.startsWith('564182')) {
      return 'Switch';
    } else if (cardNumber.startsWith('633110')) {
      return 'Switch';
    } else if (cardNumber.startsWith('6333')) {
      return 'Switch';
    } else if (cardNumber.startsWith('6759')) {
      return 'Switch';
    }
    for (let i = 51; i <= 55; i++) {
      const str = String(i);
      if (cardNumber.startsWith(str)) { return 'MasterCard'; }
    }
    for (let i = 644; i <= 649; i++) {
      const str = String(i);
      if (cardNumber.startsWith(str)) { return 'Discover'; }
    }
  }
  if (length === 18) {
    if (cardNumber.startsWith('4903')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4905')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4911')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4936')) {
      return 'Switch';
    } else if (cardNumber.startsWith('564182')) {
      return 'Switch';
    } else if (cardNumber.startsWith('633110')) {
      return 'Switch';
    } else if (cardNumber.startsWith('6333')) {
      return 'Switch';
    } else if (cardNumber.startsWith('6759')) {
      return 'Switch';
    }
  }
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if (length === 19) {
    if (cardNumber.startsWith('4')) {
      return 'Visa';
    } else if (cardNumber.startsWith('6011')) {
      return 'Discover';
    } else if (cardNumber.startsWith('65')) {
      return 'Discover';
    } else if (cardNumber.startsWith('4903')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4905')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4911')) {
      return 'Switch';
    } else if (cardNumber.startsWith('4936')) {
      return 'Switch';
    } else if (cardNumber.startsWith('564182')) {
      return 'Switch';
    } else if (cardNumber.startsWith('633110')) {
      return 'Switch';
    } else if (cardNumber.startsWith('6333')) {
      return 'Switch';
    } else if (cardNumber.startsWith('6759')) {
      return 'Switch';
    }
    for (let i = 644; i <= 649; i++) {
      const str = String(i);
      if (cardNumber.startsWith(str)) { return 'Discover'; }
    }
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if (length >= 12 && length <= 19) {
    if (cardNumber.startsWith('5018')) {
      return 'Maestro';
    } else if (cardNumber.startsWith('5020')) {
      return 'Maestro';
    } else if (cardNumber.startsWith('5038')) {
      return 'Maestro';
    } else if (cardNumber.startsWith('6304')) {
      return 'Maestro';
    }
  }
  if (length >= 16 && length <= 19) {
    for (let i = 622126; i <= 622925; i++) {
      const str = String(i);
      if (cardNumber.startsWith(str)) { return 'China UnionPay'; }
    }
    for (let i = 624; i <= 626; i++) {
      const str = String(i);
      if (cardNumber.startsWith(str)) { return 'China UnionPay'; }
    }
    for (let i = 6282; i <= 6288; i++) {
      const str = String(i);
      if (cardNumber.startsWith(str)) { return 'China UnionPay'; }
    }
  }
  return null;
};

