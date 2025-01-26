function myFunc(a, b) {
  if (a === 0) {
    return b;
  }
  return myFunc(b % a, a);
}