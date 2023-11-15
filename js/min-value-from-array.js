// DO .. WHILE LOOP
let array;
let minNumber;
function findMinValue(array) {
  console.log('DO .. WHILE loop\n');
  console.log('Array =', array, '\n');
  minNumber = array[0];
  let i = 0;
  // for (let i = 0; i < array.length; i++) {
  //   minNumber += array[i];
  // }
  do {
    minNumber = minNumber > array[i] ? array[i] : minNumber;
    console.log(`At ${i + 1} iteration smallest element found = ${minNumber}`);
    i++;
  } while (i < array.length);
  console.log(`\nThe smallest element of given array = ${minNumber}\n\n`);
  return minNumber;
}

array = [1, -2, 3, -4, 5, -6];
findMinValue(array);
array = [1666, 112, 345, 11, 565, 56599, 0.7];
findMinValue(array);
array = [6, 5, 4, 3, 2, 1, 7];
findMinValue(array);
array = [3, 5, 4, 3, 2, 1, -7];
findMinValue(array);
array = [6, 5, 4, 3, -2, 1, 0];
findMinValue(array);

// FOR LOOP

function findMinValue_2(array) {
  console.log('FOR loop\n');
  console.log('Array =', array, '\n');
  minNumber = array[0];
  // for (let i = 0; i < array.length; i++) {
  //   minNumber += array[i] ** 2;
  // }
  for (let i = 0; i < array.length; i++) {
    minNumber = minNumber > array[i] ? array[i] : minNumber;
    console.log(`At ${i + 1} iteration smallest element found = ${minNumber}`);
  }
  console.log(`\nThe smallest element of given array = ${minNumber}\n\n`);
  return minNumber;
}

array = [115, 12, 45, 215, 593, -2];
findMinValue_2(array);
array = [1666, 112, 345, 1, 56598, 0, 56600];
findMinValue_2(array);
array = [69, 53, 58, 81, 62, 51, 70];
findMinValue_2(array);
array = [69, -53, 58, 51, -62, 61, -70];
findMinValue_2(array);
array = [69, -53, 58, 51, 0, -56, -70];
findMinValue_2(array);

console.log(Math.min(...array)); // *crying*
