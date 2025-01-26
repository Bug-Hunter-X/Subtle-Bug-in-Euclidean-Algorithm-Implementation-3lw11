function myFunc(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a === 0) {
    return b;
  }
  return Math.abs(myFunc(b % a, a));
}