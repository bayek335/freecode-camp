function repeatStringNumTimes(str, num) {
  //   let newStr = "";
  //   for (let i = 0; i < num; i++) {
  //     newStr += str;
  //   }
  //   return newStr;

  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

console.log(repeatStringNumTimes("abc", 1));
