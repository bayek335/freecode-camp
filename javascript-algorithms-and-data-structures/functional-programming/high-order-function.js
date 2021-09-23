const squareList = (arr) => {
  // Only change code below this line
  // return arr.reduce((newArr, num) => Number.isInteger(num) && num>0?newArr.concat(num*num):newArr, []);

  return arr.filter((ar) => ar > 0 && ar % 1 === 0).map((ar) => ar * ar);

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
