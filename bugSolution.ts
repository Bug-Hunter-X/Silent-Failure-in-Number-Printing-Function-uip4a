function printNumbers(n: number): void {
  if (n < 1) {
    throw new Error('Input must be a positive integer.');
    // Or alternatively, handle the case differently:
    // console.log('Input must be a positive integer.');
    // return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works as expected

try {
  printNumbers(-5); // Throws an error
} catch (error) {
  console.error(error);
}
