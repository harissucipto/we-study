const polindromes = require('../palindromes');

describe('polindromes()', () => {
  it('correctly indentifies one-word polindromes', () => {
    expect(polindromes('madam')).toEqual(['madam']);
  });
});
