function frankenSplice(arr1, arr2, n) {
  //   return arr2.slice(0, n).concat(arr1).concat(arr2.splice(n));//mengubah arr2
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
