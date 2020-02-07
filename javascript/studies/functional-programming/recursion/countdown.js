function countdown(n) {
  if (n > 0) {
    console.log(n);
    return countdown(n - 1);
  }

  return "Stopped!";
}

console.log(countdown(10))
