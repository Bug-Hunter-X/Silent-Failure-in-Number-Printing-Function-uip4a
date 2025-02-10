# TypeScript Bug: Silent Failure in Number Printing Function

This repository demonstrates a subtle bug in a TypeScript function designed to print numbers from 1 to n.

## Bug Description

The `printNumbers` function, when provided with a negative integer, silently fails to execute the loop.  It doesn't throw an error or provide any indication that the input is invalid. This behavior can be difficult to debug.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.ts`.
3. Run the code using a TypeScript compiler (e.g., `tsc bug.ts` followed by `node bug.js`).
4. Observe that calling `printNumbers` with a positive number works as expected. Calling it with a negative number produces no output.

## Solution

The solution addresses this by adding an explicit check for negative input and either throwing an error or handling the case appropriately. See `bugSolution.ts` for the corrected code.