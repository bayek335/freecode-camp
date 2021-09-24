function diffArray(arr1, arr2) {
  var newArr = [];
  function diff(a, b) {
    for (let i = 0; i < a.length; i++) {
      console.log(i);
      b.indexOf(a[i]) === -1 ? newArr.push(a[i]) : "";
    }
  }
  diff(arr1, arr2);
  diff(arr2, arr1);
  return newArr;

  return arr1
    .concat(arr2)
    .filter((el) => !arr1.includes(el) || !arr2.includes(el));

  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
