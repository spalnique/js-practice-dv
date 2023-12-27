// function well(x) {
//   const count = x.length ? x.flat().filter(x => String(x).toLowerCase() === 'good').length : null;
//   return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
// }

// function well(x) {
//   const count = String(x.flat()).match(/good/gi) ? String(x.flat()).match(/good/gi).length : null;
//   return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
// }

// function scoreboard(string) {
//   const obj = {
//     nil: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };
//   let scoreLeft;
//   let scoreRight;
//   const shout = string.split(' ');
//   console.log(shout[shout.length - 2]);
//   console.log(shout[shout.length - 1]);
//   for (const key in obj) {
//     if (shout[shout.length - 2] === key) {
//       scoreLeft = obj[key];
//     }
//     if (shout[shout.length - 1] === key) {
//       scoreRight = obj[key];
//     }
//   }
//   return [scoreLeft, scoreRight];
// }

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// function findElement(arr, callback) {
//     for (const item of arr) {
//         if (callback(item)){
//             return item;
//        }
//     }
//     return null;
// }
// function isEven(num) {
//     return !(num % 2);
// }
// function startWithO(str) {
//   //  return str.toLowerCase().startsWith('o');
//    return /^o/gi.test(str);
// }
// const numbers = [1, 3, 5, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

// const res = findElement(numbers, isEven);
// console.log(res);
// const res1 = findElement(words, startWithO);
// console.log(res1);

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// function checkAge(people) {
//   return people.some(x => x.age < 20);
// }

// const res = checkAge(people);
// console.log(res);

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = arr => arr.every(x => x % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];

// const getNumber = (arr, n) => arr.find((x) => x > n);

// const res = getNumber(numbers, 3);
// console.log(res);

// const numbersArray = [4, 2, 5, 1, 3];

// const arrSort = (arr) => arr.toSorted((a, b) => a - b);

// const res = arrSort(numbersArray);
// console.log(res);

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedArray = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// const res = sortedArray(stringArray);
// console.log(res);

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const ageSortedUsers = (arr) => arr.toSorted((a, b) => a.age - b.age);
// const res = ageSortedUsers(users);
// console.log(res);

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const getAge = (arr) => arr.filter((x) => x.age > 20);
// const res = getAge(user, 25);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const sum = (sum) => sum.reduce((acc, x) => acc + x, 0);
// const res = sum(numbers);
// console.log(res);

// const arr = [1, 2, 3, 4, 5];
// const averageValue = (a) => a.reduce((acc, x) => acc + x, 0) / a.length;
// const res = averageValue(arr);
// console.log(res);

// const obj = {
//   firstName: 'Vasya',
//   lastName: 'Python',
//   age: 25,
//   allInfo() {
//     // console.log(Object.values(obj).filter((x) => typeof x !== 'function'));
//     console.log(Object.entries(obj).filter(([_, v]) => typeof v !== 'function'));
//   },
// }

// obj.allInfo();

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4
// console.log(Object.hasOwn(dog, 'legs'));

// const user1 = {
//   name: 'Oleksii',
//   surname: 'S',
//   phone: '+33 663 02 80 67',
//   email: 'vasya@mail.com',
//   address: '20 rue Gouffrand',
//   town: 'Bordeaux',
//   zipcode: '33300 / 33000',
//   country: 'France',
// };

// class UserContacts {
//   constructor({ name, email, phone, town }) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//     this.town = town;
//   }
//   logFn(say) {
//     console.log(`${say}!`);
//   };
// }

// const userContacts1 = new UserContacts(user1);
// // console.log(userContacts1.logFn);
// userContacts1.logFn('hello');
// console.log(userContacts1);

// class User {
//   constructor( [name, email] ) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User(["Mango", "mango@mail.com"]);
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com


    // this.#items = this.#items.filter(x => x !== itemToRemove);

    // this.#items = Array.from(this.#items, x => {
    //   if (x !== itemToRemove) {
    //     return x;
    //   }
    // });

    // this.#items = this.#items.reduce((acc, x) => {
    //   if (x !== itemToRemove) {
    //     acc.push(x);
    //   }
    //   return acc;
    // }, []);

    // this.#items = this.#items.reduce(
    //   (acc, x) => (x !== itemToRemove ? acc.concat([x]) : acc),
    //   [],
    // );