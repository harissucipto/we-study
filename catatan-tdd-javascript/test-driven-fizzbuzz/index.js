module.exports = num => {
  // kelipatan 3 dan 5 return fizzBuzz
  // rumusnya 3 * 5 == 15
  if (num % 15 === 0) return 'FizzBuzz';

  if (num % 3 === 0) return 'Fizz';

  if (num % 5 === 0) return 'Buzz';

  return `${num}`;
};
