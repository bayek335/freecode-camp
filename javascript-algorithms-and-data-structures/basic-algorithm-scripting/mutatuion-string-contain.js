function mutation(arr) {
  //   for (let i = 0; i < arr[1].length; i++) {
  //     if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) < 0) return false;
  //   }
  //   return true;
  return arr[1]
    .toLowerCase()
    .split("")
    .every((l) => arr[0].toLowerCase().indexOf(l) != -1);
}

console.log(mutation(["hello", "he"]));
