// DO .. WHILE LOOP
let array;
let maxNumber;
function findMaxValue(array) {
  console.log('DO .. WHILE loop\n');
  console.log('Array =', array, '\n');
  maxNumber = array[0];
  let i = 0;
  do {
    maxNumber = maxNumber < array[i] ? array[i] : maxNumber;
    console.log(`At ${i + 1} iteration biggest element found = ${maxNumber}`);
    i++;
  } while (i < array.length);
  console.log(`\nThe biggest element of given array = ${maxNumber}\n\n`);
  return maxNumber;
}

array = [1, 2, 3, 4, 5, 6];
findMaxValue(array);
array = [1666, 112, 345, 1, 56598, 56599, 56600];
findMaxValue(array);
array = [6, 5, 4, 3, 2, 1, 7];
findMaxValue(array);

// FOR LOOP

function findMaxValue_2(array) {
  console.log('FOR loop\n');
  console.log('Array =', array, '\n');
  maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    maxNumber = maxNumber < array[i] ? array[i] : maxNumber;
    console.log(`At ${i + 1} iteration biggest element found = ${maxNumber}`);
  }
  console.log(`\nThe biggest element of given array = ${maxNumber}\n\n`);
  return maxNumber;
}

array = [115, 12, 45, 215, 593, 2];
findMaxValue_2(array);
array = [1666, 112, 345, 1, 56598, 56599, 56600];
findMaxValue_2(array);
array = [69, 53, 58, 51, 62, 61, 70];
findMaxValue_2(array);

console.log(Math.max(...array)); // *crying*
