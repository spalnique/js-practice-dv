let str = prompt('Enter a string without spaces :)');
console.log(str, typeof str);

function sortString(str) {
  str = str.toLowerCase().split('');
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] > str[j]) {
        let backup = str[i];
        str[i] = str[j];
        str[j] = backup;
      }
    }
  }
  return (str = str.join(''));
}

console.log(sortString(str));

// console.log(`Result = ${sortString('edcba')}`);
// console.log(`Result = ${sortString('ertyuiopkjhgfcvbnm')}`);
// console.log(`Result = ${sortString('zaqwsxcderfvbgt')}`);
// console.log(`Result = ${sortString('xcderf')}`);
// console.log(`Result = ${sortString('Oleksii')}`);
// console.log(`Result = ${sortString('Oleksandra')}`);
// console.log(`Result = ${sortString('Dmytro')}`);
// console.log(`Result = ${sortString('GoIT')}`);
// console.log(`Result = ${sortString('HelloWorld')}`);
// console.log(`Result = ${sortString('bbbbaaaddddccc')}`);
// console.log(`Result = ${sortString('yyyzzaaaeerrr')}`);
// console.log(`Result = ${sortString('cabeeed')}`);
