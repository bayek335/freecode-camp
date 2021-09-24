function sumAll(arr) {
  let value = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    value += i;
  }
  return value;
}

console.log(sumAll([1, 4]));
