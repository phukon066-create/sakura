function countEvenNumbers(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2!== 0) {
      continue; // skip odd numbers
    }
    count++;
  }

  return count;
}

console.log(countEvenNumbers([3, 8, 11, 14, 20])); // 3
console.log(countEvenNumbers([1, 3, 5])); // 0
console.log(countEvenNumbers([2, 4, 6])); // 3



function countEvenNumbers(numbers){
    let count=0;

    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2 !==0){
            continue;
        }
        count ++;
    }
    return count;
}
console.log(countEvenNumbers([2, 4, 6])); 



