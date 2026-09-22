function firstFail(marks, passMark = 40) {
  let result = -1; // default if no fail found

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < passMark) {
      result = i;
      break; // stop as soon as first failing mark is found
    }
  }

  return result;
}

// Test
console.log(firstFail([65, 72, 33, 80]));
console.log(firstFail([50, 60, 70]));
console.log(firstFail([30, 90, 20], 40));



