function destroyer(arr, ...valtoremove) {
  // params ...arr
  //   param arr, ...valtoremove

  //   to get object or array from arguments use Object.values(arguments) / Array.from(arguments) get it an array

  let dest = arr.slice(1);
  let newArr = [];
  for (let i = 0; i < arr[0].length; i++) {
    console.log(arr[0][i]);
    if (dest.indexOf(arr[0][i]) === -1) {
      newArr.push(arr[0][i]);
    }
  }
  //   return newArr;
  //   return arr[0].concat(arr.slice(1)).filter((el) => !arr.includes(el));
  console.log(valtoremove);
  console.log(arr);
  return arr.filter((el) => !valtoremove.includes(el));
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
