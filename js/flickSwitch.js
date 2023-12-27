// function match(candidate, job) {
//   if (!candidate.minSalary || !job.maxSalary) {
//     throw new Error('Errordasdsadsa');
//   }
//   return candidate.minSalary * 0.9 <= job.maxSalary;
// }
// console.log(match({ minSalary: 100000 }, { maxSalary: 140000 }));
// console.log(match({ minSalary: 160000 }, { Salary: 140000 }));
// function sortByAlphabet(sentence) {
//   const sorted = sentence
//     .split(' ')
//     .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
//     .join(' ');
//   return sorted;
// }
// console.log(sortByAlphabet('I will love you for ever and ever'));
// console.log(sortByAlphabet('I want to spent my life with you'));
// console.log(sortByAlphabet('Would you share with me every moment of your life'),
// );
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
// const firstName = {
//   A: 'Alpha',
//   B: 'Beta',
//   C: 'Cache',
//   D: 'Data',
//   E: 'Energy',
//   F: 'Function',
//   G: 'Glitch',
//   H: 'Half-life',
//   I: 'Ice',
//   J: 'Java',
//   K: 'Keystroke',
//   L: 'Logic',
//   M: 'Malware',
//   N: 'Nagware',
//   O: 'OS',
//   P: 'Phishing',
//   Q: 'Quantum',
//   R: 'RAD',
//   S: 'Strike',
//   T: 'Trojan',
//   U: 'Ultraviolet',
//   V: 'Vanilla',
//   W: 'WiFi',
//   X: 'Xerox',
//   Y: 'Y',
//   Z: 'Zero',
// };
// const surname = {
//   A: 'Analogue',
//   B: 'Bomb',
//   C: 'Catalyst',
//   D: 'Discharge',
//   E: 'Electron',
//   F: 'Faraday',
//   G: 'Gig',
//   H: 'Hacker',
//   I: 'IP',
//   J: 'Jabber',
//   K: 'Killer',
//   L: 'Lazer',
//   M: 'Mike',
//   N: 'n00b',
//   O: 'Overclock',
//   P: 'Payload',
//   Q: 'Quark',
//   R: 'Roy',
//   S: 'Spy',
//   T: 'T-Rex',
//   U: 'Unit',
//   V: 'Virus',
//   W: 'Worm',
//   X: 'X',
//   Y: 'Yob',
//   Z: 'Zombie',
// };
// function aliasGen() {
//   const isFirstNameValid = Object.keys(firstName).includes(arguments[0].charAt(0).toUpperCase());
//   const isSurnameValid = Object.keys(surname).includes(arguments[1].charAt(0).toUpperCase());
//   const newAlias = firstName[`${arguments[0][0].toUpperCase()}`] + ' ' + surname[`${arguments[1][0].toUpperCase()}`];
//   return isFirstNameValid && isSurnameValid ? newAlias : 'Your name must start with a letter from A - Z.';
// }
// console.log(aliasGen('Mike', 'Millington'));
// console.log(aliasGen('Fahima', 'Tash'));
// console.log(aliasGen('Daisy', 'Petrovic'));
// console.log(aliasGen('7393424', 'Anumbha'));
// console.log(aliasGen('Anuddanumbha', '23200'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://www.codewars.com/kata/526471539d52735c620000c6/
// function Counter() {
//   this.value = 0;
// }
// Counter.prototype.increase = function () {
//   this.value++;
// };
// Counter.prototype.getValue = function () {
//   return this.value;
// };
// Counter.prototype.reset = function () {
//   this.value = 0;
// };
/////////////////////////////////////////////     .map()     //////////////////////////////////////////////////////////
// const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
// const newArr = arr.map(function(element, index) {
//   if (index % 2) {
//     element = element.toLowerCase();
//   } else {
//     element += '00';
//   }
//   return element;
// })
// console.log(newArr);
// const cart = {
//   product1: 10,
//   product2: 100,
//   product3: 1000,
//   calculateTotal() {
//     let total = 0;
//     for (const item of Object.values(this)) {
//       total += !isNaN(item) ? item : 0;
//     }
//     return total;
//   },
// };
// console.log(cart.calculateTotal());
// let unicode = [];
// for (let i = 0; i <= 1114111; i++) {
//   unicode.push(String.fromCodePoint(i));
// }
// console.log(unicode);
// let result = [];
// function wierdSymbol(arr) {
//   for (const symbol of arr) {
//     if (symbol.toUpperCase().toLowerCase().length !== symbol.length) {
//       result.push(symbol);
//     }
//   }
//   console.log(result.length);
//   return result;
// }
// console.log(wierdSymbol(unicode));
// function sumOfDifferences(arr) {
//   if (arr.length > 1) {
//     return arr.sort((a, b) => b - a).reduce((acc, x, index, array) => (index + 1 < array.length ? acc + x - array[index + 1] : acc), 0);
//   }
//   return 0;
// }
// console.log(sumOfDifferences([17, 2, 31, 10, 16, -3, -8, 12, 80]));
// const arr1 = [100, 200, 300];
// const arrayPlusArray = arr1 =>
//   arr1.reduce((arr, element, index, array) => {
//     if (index < array.length - 1) {
//       arr.push(element - array[index + 1]);
//     }
//     return arr;
//   }, []);
// console.log(arrayPlusArray(arr1));
//return the total number of smiling faces in the array
// const countSmileys = (arr) => arr.filter((x) => x.match(/^[:;][-~]?[)D]$/g)).length;
// // or alternatively I can use RegExp.test(string)
// // const countSmileys = (arr) => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// console.log(countSmileys([]                             ));  // 0
// console.log(countSmileys([':D',':~)',';~D',':)']        ));  // 4
// console.log(countSmileys([':)',':(',':D',':O',':;']     ));  // 2
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));  // 1
// const arr = [':)', ':(', ':D', ':O', ':;'];
// console.log(arr.filter(x => x.match(/^[:;][-~]?[)D]$/g)));
// const arr = str.split(/(a)/);
// console.log(arr);
// let str = 'ababcabcdabcde';
// const result = str.split('a').filter(Boolean).map(x => `a${x}`.split(''));
// console.log(result);
// let players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// console.log('\n\n-----------------------------=--- Calc avg time played for all players --------------------------------');
// const totalAveragePlaytimePerGame = (arr) => arr.reduce((acc, x) => acc + x.playtime / x.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame(players));
// console.log('\n\n----------------------------- Cacl avg time played for each player (array) ----------------------------');
// const calcAvgTimePlayedPerPlayer = (arr) => arr.map((x) => x.playtime / x.gamesPlayed);
// console.log(calcAvgTimePlayedPerPlayer(players));
// console.log('\n\n-------------------- Add avg time played for each player (adding new key-value pair) ------=-----------');
// const addTimePlayerPlayed = (arr) => arr.forEach((x) => (x.averageTimePlayed = x.playtime / x.gamesPlayed));
// addTimePlayerPlayed(players);
// console.log(players);
// console.log('\n---------------------------------------------------------------------------------------------------------');
// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
// ];
// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books
//   .filter(x => x.rating > MIN_BOOK_RATING)
//   .map(x => x.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(books);
// console.log(
//   books
//     .filter(x => x.rating > MIN_BOOK_RATING)
//     .map(x => x.author)
//     .toSorted((a, b) => a.localeCompare(b)),
// );
// console.log(
//   books
//     .filter(x => x.rating > MIN_BOOK_RATING)
//     .toSorted((a, b) => a.author.localeCompare(b.author)),
// );
function flickSwitch(arr) {
  let switchFlag = true;

  arr.forEach((item, index, array) => {
    if (item === 'flick') {
      switchFlag = !switchFlag;
      array[index] = switchFlag;
    } else {
      array[index] = switchFlag;
    }
  });

  return arr;
}
// Examples
console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); // ➞ [true, false, false, false]

console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])); // ➞ [false, false, false, false]

console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); // ➞ [true, true, false, false, true]
