function PascalsTriangle(rows) {
  // Loop backwards from 'rows' down to 0
  for (let i = rows; i >= 0; i--) {
    let line = "";
    let val = 1;

    // Add leading spaces
    line += " ".repeat(rows - i);

    for (let j = 0; j <= i; j++) {
      line += val + " ";
      // Calculate the next binomial coefficient: (n, k)
      val = (val * (i - j)) / (j + 1);
    }

    console.log(line.trimEnd());
  }
}

// Call the function for the 4th row pattern
PascalsTriangle(4);
