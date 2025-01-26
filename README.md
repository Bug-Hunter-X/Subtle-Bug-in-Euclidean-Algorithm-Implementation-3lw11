# Subtle Bug in Euclidean Algorithm Implementation

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers.

The bug is related to handling negative inputs.  The original code doesn't correctly handle cases where either a or b is negative.  The solution provides a corrected version that handles negative inputs correctly.

## Bug Description

The original code (bug.js) fails to produce the correct GCD when either input is negative, because the modulo operator (%) in JavaScript can produce negative results. 

## Solution

The corrected code (bugSolution.js) addresses this by taking the absolute values of a and b before performing the calculation and taking the absolute value of the result.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your favorite text editor.
3. Open your browser's developer console and run the code (or use Node.js).
4. Test both versions with various inputs, including negative numbers.

## Additional Notes

This example highlights the importance of carefully considering edge cases and potential issues when implementing algorithms, especially with operators that can have unexpected behavior with negative numbers.