function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort();
  // .sort(
  //       function (a, b) {
  //     console.log(a, b);
  //     console.log(b);
  //     return a === b ? 0 : a < b ? -1 : 1;
  //   }
  // );
  // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

function numberOrder(arr) {
  // Only change code below this line
  return arr.sort((a, b) => {
    // console.log(a - b);
    // console.log(a);
    // console.log(b);
    return a - b;
    // return b-a;
  });
  // Only change code above this line
}
console.log(numberOrder([1, 4, 3, 5, 2, 8]));
