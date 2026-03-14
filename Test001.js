function printHollowDiamond(n) {
  // 1. Upper part of the diamond
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Leading spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    // Stars and hollow spaces
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }

  // 2. Lower part of the diamond
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    // Leading spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    // Stars and hollow spaces
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

// Execute with n = 5 
printHollowDiamond(5);
