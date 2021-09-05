// function largestOfFour(arr) {
//     let newArray = [];
//     for(let i=0; i<arr.length; i++){
//         newArray.push(Math.max(...arr[i]))
//     }
//     return newArray;
// }

const largestOfFour = (num) => num.map((num) => Math.max(...num));

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
