function chunkArrayInGroups(arr, size) {
  let newArr = [];
  console.log(arr.length);
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
