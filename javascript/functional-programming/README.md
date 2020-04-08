# Functional Programming

## Recursion

Example:

```js
function factorial(x) {
  // TERMINATION
  if (x < 0) return;

  // BASE
  if (x === 0) return 1;

  // RECURSION
  return x * factorial(x - 1);
}
```
