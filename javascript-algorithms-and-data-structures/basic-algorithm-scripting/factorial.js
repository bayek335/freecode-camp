function factorialize(num) {
  //factorial symbol " ! "
  let newNum = 1;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    newNum = newNum * i;
  }
  return newNum;
}

console.log(factorialize(5));
