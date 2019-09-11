module.exports = num => {
  // kelipatan 3 dan 5 return fizzBuzz
  // rumusnya 3 * 5 == 15
  if (num % 15 === 0) return 'FizzBuzz';
  return `${num}`;
};
