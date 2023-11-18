let eachBanknoteQuantity = 20;
const valueTwenty = 20;
const valueFifty = 50;

let twentiesArray = [];
for (let i = 0; i < eachBanknoteQuantity; i++) {
  twentiesArray.push(valueTwenty);
}
console.log('Banknotes of 20 = ', twentiesArray);

let fiftiesArray = [];
for (let i = 0; i < eachBanknoteQuantity; i++) {
  fiftiesArray.push(valueFifty);
}
console.log('Banknotes of 50 = ', fiftiesArray);

let requestedArray = [];
let requestedAmount = 530; // prompt('Please enter the amount you wish to withdraw:');
function cashWithdrawal(requestedAmount) {
  if (
    requestedAmount <=
    valueFifty * fiftiesArray.length + valueTwenty * twentiesArray.length
  ) {
    do {
      requestedArray.push(valueTwenty);
      requestedAmount -= valueTwenty;
      twentiesArray = twentiesArray.slice(0, twentiesArray.length - 1);
    } while (requestedAmount % valueFifty > 0);
    do {
      requestedArray.push(valueFifty);
      requestedAmount -= valueFifty;
    } while (requestedAmount > 0);
  }
  console.log('Banknotes withdrawn = ', requestedArray);
  return requestedArray;
}

cashWithdrawal(requestedAmount);
