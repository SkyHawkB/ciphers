function shift(char, amount, unshift) {
  if(unshift) amount = -amount;

  if(/[^A-Za-z]/.test(char)) return char;

  let _ = char.charCodeAt(0) + amount;

  if((_ >= 0x0041 && _ <= 0x005A) || (_ >= 0x0061 && _ <= 0x007A)) {
    return String.fromCharCode(_);
  } else {
    while(!((_ >= 0x0041 && _ <= 0x005A) || (_ >= 0x0061 && _ <= 0x007A))) {
      _ -= 26;
    }

    return String.fromCharCode(_);
  }
}

/**
 * Encode a string using a [caesar (substitution/shifting) cipher]{@link https://en.wikipedia.org/wiki/Caesar_cipher}.
 * Only shifts letters in the English Alphabet.
 *
 * @param {String} string - The string to encode.
 * @param {Number} [shiftAmount=3] - The amount to shift by.
 */
module.exports.encodeCaesar = function(string, shiftAmount=3) {
  let res = '';

  for(const i in string) {
    res += shift(string[i], shiftAmount, false);
  }

  return res;
};

/**
 * Decode a string that was encoded using a [caesar (substitution/shifting) cipher]{@link https://en.wikipedia.org/wiki/Caesar_cipher}.
 *
 * @param {String} string - The string to decode.
 * @param {Number} [shiftAmount=3] - The amount to unshift by.
 */
module.exports.decodeCaesar = function(string, shiftAmount=3) {
  let res = '';

  for(const i in string) {
    res += shift(string[i], shiftAmount, true);
  }

  return res;
};
