function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  //   return str
  //     .toLowerCase()
  //     .split(" ")
  //     .map((ar) => ar.replace(ar[0], ar[0].toUpperCase()))
  //     .join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));
