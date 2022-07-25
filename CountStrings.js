const countStrings = (array4) => {
    let retval = 0;
    for (let i = 0; i < array4.filter((n) => typeof n === "string"); i++) {
      retval++;
    }
    return retval;
  };
  
  const countDecimalNumbers = (array4) => {
    for (let i = 0; i < array4.length; i++) {
      let retval = 0;
      if (array4[i] % 1 !== 0) {
        retval++;
      }
      return retval;
    }
  };
  //
  //
  main();