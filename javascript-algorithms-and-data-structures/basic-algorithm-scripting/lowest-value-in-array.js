function getIndexToIns(arr, num) {
  console.log(arr.length);

  //   return arr
  //     .concat(num)
  //     .sort((a, b) => a - b)
  //     .indexOf(num);
  return arr.filter((val) => num > val).length;
}

console.log(getIndexToIns([2, 5, 10, 25], 15));
