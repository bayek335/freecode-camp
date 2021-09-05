function confirmEnding(str, target) {
  // return str.slice(str.length-target.length)===target;

  return str.slice(-target.length) === target;

  //   let regEx = new RegExp(`${target}$`, "i");
  //   return regEx.test(str);
}

console.log(confirmEnding("Bastian", "n"));
