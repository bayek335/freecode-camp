function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];

    for(let i=0;i<n; i++){
        row.push(0)
    }

    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray

  
    //   for (let j = n; j <= n; j++) {
    //     // Pushes n zeroes into the current row to create the columns
    //     row.push(0);
    //   }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    
    return newArray;
  }
  
  let matrix = zeroArray(3, 3);
  console.log(matrix);