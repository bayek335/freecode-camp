// function findElement(arr, func) {
//   return arr.find(func);
// }
const findElement = (arr, func) => arr[arr.map(func).indexOf(true)];

console.log(findElement([1, 2, 4, 6], (num) => num % 2 === 0));
