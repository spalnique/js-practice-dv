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

// =======================================================================================================================

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

// =======================================================================================================================

// let str = 'ababcabcdabcde';
// const result = str.split('a').filter(Boolean).map(x => `a${x}`.split(''));
// console.log(result);

// =======================================================================================================================

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

// =======================================================================================================================

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

// =======================================================================================================================

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

// =======================================================================================================================

// function flickSwitch(arr) {
//   let switchFlag = true;

//   arr.forEach((item, index, array) => {
//     if (item === 'flick') {
//       switchFlag = !switchFlag;
//       array[index] = switchFlag;
//     } else {
//       array[index] = switchFlag;
//     }
//   });

//   return arr;
// }

// // Examples
// console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); // ➞ [true, false, false, false]
// console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])); // ➞ [false, false, false, false]
// console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); // ➞ [true, true, false, false, true]

// =======================================================================================================================

// const multiTable = number =>
//   Array.from({ length: 10 })
//     .map((x, index) => `${index + 1} * ${number} = ${(index + 1) * number}`)
//     .join('\n');

// const multiTable = n => [...Array(10)].map((_, i) => `${i + 1} * ${n} = ${n * i + n}`).join('\n');

// console.log(multiTable(6));
// console.log(multiTable(3));
// console.log(multiTable(11));
// console.log(multiTable(46));

// =======================================================================================================================

// const a = false;
// console.log(Boolean(a));
// console.log(Boolean(a == !a));
// console.log(Boolean(!a));

// =======================================================================================================================
// ================================ https://www.codewars.com/kata/59dd3ccdded72fc78b000b25 ===============================

// function whatday(num) {
//   const week = {
//     1: 'Sunday',
//     2: 'Monday',
//     3: 'Tuesday',
//     4: 'Wednesday',
//     5: 'Thursday',
//     6: 'Friday',
//     7: 'Saturday',
//   };
//   // return week[num] ? week[num] : 'Wrong, please enter a number between 1 and 7';
//   return week[num] || 'Wrong, please enter a number between 1 and 7';
// }

// console.log(whatday(1));
// console.log(whatday(2));
// console.log(whatday(5));
// console.log(whatday(8));
// console.log(whatday(7));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/59c8b38423dacc7d95000008 ================================

// function isValid(formula) {
//   console.log(formula.includes(7 || 8));
//   console.log(!formula.includes(1 && 2));
//   console.log(!formula.includes(3 && 4));
// console.log(formula.includes(5 && 6));
//   return `Result = ${(
//     formula.includes(7 || 8) &&
//     (!formula.includes(1 && 2) || !formula.includes(3 && 4) || formula.includes(5 && 6))
//   )}`;
// }

// console.log(isValid([1, 3, 7]));
// console.log(isValid([7, 1, 2, 3]));
// console.log(isValid([1, 3, 5, 7]));
// console.log(isValid([1, 5, 6, 7, 3]));
// console.log(isValid([5, 6, 7]));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/596fba44963025c878000039 ================================

// const contamination = (text, char) => text.replaceAll(/./gi, char);
// const contamination = (text, char) => char.repeat(text.length);
// const contamination = (text, char) => text.replace(/./g, char);
// const contamination = (text, char) => text.split('').map(x => char).join('');

// function contamination(text, char) {
//   let array = text.split('');
//   array.forEach((_, idx, arr) => arr[idx] = char);
//   return array.join('');
// }

// console.log(contamination('abc', '1'));
// console.log(contamination('adasdsadasbc', 'x'));
// console.log(contamination('dasdswqdq', '25'));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023 ================================

// function validateUsr(username) {
//   console.log(username);
//   // return username.length >= 4 && username.length <= 16 ? /^[a-z0-9_]*$/.test(username) : false;
//   return /^[a-z0-9_]{4,16}$/.test(username);
// }

// console.log(validateUsr('324asds!'));

// const array = ['1111111', '2', '33', '4444', '555', '66', '7', '888', '9'];

// // const filter = (arr, n) => arr.filter((x) => new RegExp(`^[0-9]{${n}}$`).test(x));
// const filter = (arr, n) => arr.filter(x => x.match(new RegExp(`^[0-9]{${n}}$`)));

// console.log(filter(array, 4));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/57a37f3cbb99449513000cd8 ================================

// function getNumberFromString(s) {
//   // console.log(Array.from(s));
//   // console.log(Array.from(s).map(x => x.toString()));
//   return parseInt(
//     Array.from(s)
//       .map(x => (!isNaN(x) ? x : ''))
//       .join(''),
//   );
// }

// function getNumberFromString(s) {
//   return parseInt(s.match(/[0-9]/g).join(''));
// }

// const getNumberFromString = (s) => +s.replace(/\D/g, '');

// console.log(getNumberFromString('jdk312jsah13221'));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/634913db7611b9003dff49ad ================================

// const purifyTheStratholme = s => s.replace(/.?i+.?/gi, '').trim();
// const purifyTheStratholme = (s) => s.replace(/\S?i+\S?/gi, '').trim();

// console.log(purifyTheStratholme());

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript ================================

// function getSum(a, b) {
//   console.log([...arguments].sort((a, b) => a - b));
//   console.log(Array.from({ length: Math.max(...arguments) - Math.min(...arguments) + 1 }, (x, index) => x = Math.min(...arguments) + index).reduce((acc, element) => acc + element,0 ));
// }

// getSum(-2, 3);

// console.log(Array.from());

// function sum(a, b) {
//   return a + b;
// }

// function notify(name) {
//   return `Dear ${name}, your room will be ready in 30 minutes`;
// }

// function average(a, b, callback) {
//   const total = callback(a, b);
//   return total / (arguments.length - 1);
// }

// console.log(average(10, 6, sum));
// console.log(registerGuest('Mango', greet)); // "Registering Mango!"
// "Welcome Mango!"
// console.log(registerGuest('Mango', notify)); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

// let x = 5;
// let y = 10;

// let temp;

// temp = x;
// x = y;
// y = temp;

// console.log('x=',x);
// console.log('y=',y);
// console.log(z);

// // =============================================================

// x = 10;
// y = 100;

// x = x + y;
// y = x - y;
// x = x - y;

// console.log('x=', x);
// console.log('y=', y);

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e ================================

// const sumOfDifferences = array =>
//   array
//     .sort((a, b) => b - a)
//     .reduce(
//       (acc, x, i, arr) => (arr.length > 1 ? (i < arr.length - 1 ? acc + x - arr[i + 1] : acc) : 0),
//       0,
//     );

// console.log(sumOfDifferences([10, 7, 1]));
// console.log(sumOfDifferences([100, 17, 11]));
// console.log(sumOfDifferences([101, 7, 1]));
// console.log(sumOfDifferences([110, 7, 15]));
// console.log(sumOfDifferences([1, 79, 2]));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/5648b12ce68d9daa6b000099 ================================

// const number = busStops =>
//   busStops.reduce(
//     (acc, x) =>
//       acc + x.reduce((acc, x, i, arr) => (i < arr.length - 1 ? acc + x - arr[i + 1] : acc), 0),
//     0,
//   );

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ]),
// ); // 5
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ]),
// ); // 17
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ]),
// ); // 21
// console.log(number([[0, 0]])); // 0

// const n = [100, 25, 15, 7, 3];

// function getNumbers(numbers, target) {
//   const res = [];
//   let resArrSum = res.reduce((acc, x) => (res.length ? acc + x : acc), 0);

//   console.log('target =', target);
//   console.log('given array of numbers =', numbers);
//   for (let i = 0; i < numbers.length; i++) {
//     if (resArrSum < t) {
//       res.push(numbers[i]);
//     }
//     if (resArrSum === target) {
//       return res;
//     }

//   }
//   console.log('result =', res);
//   return res;
// }

// console.log(getNumbers(n, 400));
// console.log(getNumbers(n, 24));
// console.log(getNumbers(n, 53));
// console.log(getNumbers(n, 35));
// console.log(getNumbers(n, 107));
// console.log(getNumbers(n, 57));
// console.log(getNumbers(n, 301));
// console.log(getNumbers([35, 20, 7], 81));
// console.log(getNumbers(n, 4));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/52fba66badcd10859f00097e ================================

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(x => !['a', 'e', 'i', 'o', 'u'].includes(x.toLowerCase()))
//     .join('');
// }

// console.log(disemvowel('This website is for losers LOL!')); // "Ths wbst s fr lsrs LL!"
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// console.log(disemvowel('What are you, a communist?')); // "Wht r y, cmmnst?"

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/577ff15ad648a14b780000e7 ================================

// function greet(language) {
//   const localeArr = [
//     ['english', 'Welcome'],
//     ['czech', 'Vitejte'],
//     ['danish', 'Velkomst'],
//     ['dutch', 'Welkom'],
//     ['estonian', 'Tere tulemast'],
//     ['finnish', 'Tervetuloa'],
//     ['flemish', 'Welgekomen'],
//     ['french', 'Bienvenue'],
//     ['german', 'Willkommen'],
//     ['irish', 'Failte'],
//     ['italian', 'Benvenuto'],
//     ['latvian', 'Gaidits'],
//     ['lithuanian', 'Laukiamas'],
//     ['polish', 'Witamy'],
//     ['spanish', 'Bienvenido'],
//     ['swedish', 'Valkommen'],
//     ['welsh', 'Croeso'],
//   ];

//   // const localeObjByReduce = localeArr.reduce((obj, [key, value]) => obj[key] = value, {});
//   const localeObj = Object.fromEntries(localeArr);
//   return Object.hasOwn(localeObj, language) ? localeObj[language] : localeObj.english;
// }

// console.log(greet('english'));
// console.log(greet('french'));
// console.log(greet('czech'));
// console.log(greet("pidor's language"));
// console.log(greet('ukrainian'));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/57d001b405c186ccb6000304 ================================

// function iTri(s) {

//   const race = {
//     Run: 26.2,
//     Bike: 112,
//     Swim: 2.4,
//   };

//   const distance = Object.values(race).reduce((acc, x) => acc + x, 0);

//   return s >= distance
//     ? "You're done! Stop running!"
//     : distance - s <= 10
//     ? { Run: 'Nearly there!' }
//     : s >= race.Bike
//     ? { Run: `${(distance - s).toFixed(2)} to go!` }
//     : s >= race.Swim
//     ? { Bike: `${(distance - s).toFixed(2)} to go!` }
//     : s > 0
//     ? { Swim: `${(distance - s).toFixed(2)} to go!` }
//     : 'Starting Line... Good Luck!';
// }

// console.log(iTri(36)); //,{'Bike':'104.60 to go!'}
// console.log(iTri(103.5)); //,{'Bike':'37.10 to go!'}
// console.log(iTri(0)); //,'Starting Line... Good Luck!'
// console.log(iTri(2)); //,{'Swim':'138.60 to go!'}

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/57cff961eca260b71900008f ================================

// function isVow[a) {
//   const vow = ['a', 'e', 'i', 'o', 'u'];
//   return a.map(x => (vow.includes(String.fromCharCode(x)) ? String.fromCharCode(x) : x));
// }

// const isVow = a => {
//   let vowels = {
//     97: 'a',
//     101: 'e',
//     105: 'i',
//     111: 'o',
//     117: 'u',
//   };
//   return a.map(x => (vowels[x] ? vowels[x] : x));
// };

// console.log(
//   isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]),
// );
// console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/57f222ce69e09c3630000212 ================================

// function well(x) {
//   return x.filter(item => item === 'good').length >= 3
//     ? 'I smell a series!'
//     : x.filter(item => item === 'good').length >= 1
//     ? 'Publish!'
//     : 'Fail!';
// }

// console.log(well(['bad', 'bad', 'bad'])); // 'Fail!')
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // 'Publish!')
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // 'I smell a series!')

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/569924899aa8541eb200003f ================================

// function quicksum(packet) {
//   // const validArray = Array.from({ length: 27 }, (_, i) =>
//   //   i === 0 ? ' ' : String.fromCharCode(64 + i),
//   // );
//   //   return /^[A-Z\s]+$/.test(packet)
//   //     ? packet.split('').reduce((acc, x, i) => acc + validArray.indexOf(x) * (i + 1), 0)
//   //     : 0;
//   return /^[A-Z\s]+$/.test(packet)
//     ? packet
//         .split('')
//         .reduce(
//           (acc, x, i, arr) => acc + (x !== ' ' ? (packet.charCodeAt(i) - 64) * (i + 1) : 0),
//           0,
//         )
//     : 0;
// }

// console.log(quicksum('ACM'));
// console.log(quicksum('MID CENTRAL'));
// console.log(quicksum('BBC'));
// console.log(quicksum('???'));
// console.log(quicksum('axg '));
// console.log(quicksum('234 234 WEF ASDF AAA 554211 ???? '));
// console.log(quicksum('A C M'));

// function dashatize(num) {
//   // return Array.from(num.toString(), x => (x % 2 ? '-' + x + '-' : x)).join('').replace(/^-+|-(?=-)|-$/g, '');
//   // const arr = [...Math.abs(num).toString()];
//   const resArr = [];
//   [...Math.abs(num).toString()].forEach(x => (x % 2 ? resArr.push(`-${x}-`) : resArr.push(x)));
//   return resArr.join('').replace(/^-+|-(?=-)|-$/g, '');
// }

// function dashatize(num) {
//   return num.toString().match(/([13579]|[02468]+)/g).join('-');
// };

// console.log(dashatize(274));
// console.log(dashatize(5311));
// console.log(dashatize(86320));
// console.log(dashatize(974302));
// console.log(dashatize(0));
// console.log(dashatize(-1));
// console.log(dashatize(-28369));

// function dirReduc(arr) {
// console.log(arr);
// let result = [];
// const n = arr.filter(x => x === 'NORTH');
// //   console.log(n.length);
// const s = arr.filter(x => x === 'SOUTH');
// //   console.log(s.length);
// const e = arr.filter(x => x === 'EAST');
// //   console.log(e.length);
// const w = arr.filter(x => x === 'WEST');
// //   console.log(w.length);

// for (let i = 1; i <= Math.abs(n.length - s.length); i++) {
//   n.length > s.length ? result.push('NORTH') : result.push('SOUTH');
// }
// for (let i = 1; i <= Math.abs(e.length - w.length); i++) {
//   e.length > w.length ? result.push('EAST') : result.push('WEST');
// }
// let str = arr.join(' ');
// for (let i = 1; i <= 4; i++) {
//   if (str.includes('NORTH SOUTH')) {
//     str = str.replaceAll('NORTH SOUTH', ' ').replace(/\s+/g, ' ');
//     console.log(str);
//   } else if (str.includes('SOUTH NORTH')) {
//     str = str.replaceAll('SOUTH NORTH', ' ').replace(/\s+/g, ' ');
//     console.log(str);
//   } else if (str.includes('WEST EAST')) {
//     str = str.replaceAll('WEST EAST', ' ').replace(/\s+/g, ' ');
//     console.log(str);
//   } else if (str.includes('EAST WEST')) {
//     str = str.replaceAll('EAST WEST', ' ').replace(/\s+/g, ' ');
//     console.log(str);
//   }
// }
// const resArr = str.trim() ? str.trim().split(' ') : [];
// console.log(resArr);
// return resArr;

//   let str = arr.join(' ');
//   for (let i = 1; i <= 4; i++) {
//     // str = str
//     //   .replaceAll('NORTH SOUTH', ' ')
//     //   .replaceAll('SOUTH NORTH', ' ')
//     //   .replaceAll('WEST EAST', ' ')
//     //   .replaceAll('EAST WEST', ' ')
//     //   .replace(/\s+/g, ' ')
//     //   .trim();
//     str = str
//       .replace(/NORTH SOUTH|SOUTH NORTH|WEST EAST|EAST WEST/g, ' ')
//       .replace(/\s+/g, ' ')
//       .trim();
//   }
//   console.log(str ? str.split(' ') : []);
//   return str ? str.split(' ') : [];
// }

// dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']); // [ 'WEST' ]
// dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']); // [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]
// dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']); // []

// function longestConsec(strarr, k) {
//   if (strarr.length === 0 || k > strarr.length || k <= 0) {
//     return '';
//   }
//   let resArr = [];
//   for (let i = 0; i < strarr.length - k + 1; i++) {
//     resArr.push(strarr.slice(i, (i + k)).reduce((acc, x) => acc + x, ''));
//   }
//   resArr = resArr.sort((a, b) => b.length - a.length);
//   console.log(resArr.length, resArr[0]);
//   return resArr.length ? resArr[0] : '';
// }

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1);
// longestConsec([], 3);
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2);
// longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2);
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2);
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3);
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15);
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0);

// =======================================================================================================================
// =============================== https://www.codewars.com/kata/58f5c63f1e26ecda7e000029 ================================

// function wave(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     let arr = str.split('');
//     if (str[i] !== ' ') {
//       arr[i] = arr[i].toUpperCase();
//       result.push(arr.join(''));
//     }
//   }
//   return result;
// }

// console.log(wave('hello'));
// console.log(wave('codewars'));
// console.log(wave(''));
// console.log(wave('two words'));
// console.log(wave(' gap '));
