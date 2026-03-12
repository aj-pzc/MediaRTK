const sumArray = (numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

const countWords = (text) => {
  if (!text || text.trim() === '') return 0;
  const words = text.split(' ');
  return words.filter(word => word !== '').length;
};

const findMax = (numbers) => {
  if (numbers.length === 0) return null;
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) max = num;
  }
  return max;
};

const isDivisible = (num, divisor) => {
  if (divisor === 0) return 'No se puede dividir entre cero';
  return num % divisor === 0;
};

module.exports ={
    sumArray,
    countWords,
    findMax,
    isDivisible
};
