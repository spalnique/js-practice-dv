let eachBanknoteQuantity = 20;
const valueTwenty = 20;
const valueFifty = 50;
let totalAmountAvailable;

let twentiesArray = [];
for (let i = 0; i < eachBanknoteQuantity; i++) {
  twentiesArray.push(valueTwenty);
}
// console.log('Banknotes of 20 = ', twentiesArray);

let fiftiesArray = [];
for (let i = 0; i < eachBanknoteQuantity; i++) {
  fiftiesArray.push(valueFifty);
}
console.log('Banknotes of 50 = ', fiftiesArray);

totalAmountAvailable =
  valueFifty * fiftiesArray.length + valueTwenty * twentiesArray.length;
// console.log('Total amount available in ATM = ', totalAmountAvailable);

// let requestedAmount = prompt('Please enter the amount you wish to withdraw: ');
function cashWithdrawal(requestedAmount) {
  // console.log('Amount requested = ', requestedAmount);
  let message;
  let requestedArray = [];
  if (requestedAmount <= totalAmountAvailable && requestedAmount >= 20) {
    while (requestedAmount % valueFifty !== 0) {
      if (twentiesArray.length >= (requestedAmount - (fiftiesArray * valueFifty)) / valueTwenty) {
        requestedArray.push(valueTwenty);
        requestedAmount -= valueTwenty;
        twentiesArray.pop();
      } else {
        message = 'Not enough banknotes of 20, try amount divisible by 50.';
        console.log(message);
        return message;
        // alert('Not enough banknotes of 20, try amount divisible by 50');
      }
    }
    while (requestedAmount !== 0) {
      if (
        fiftiesArray.length >=
          (requestedAmount - twentiesArray.length * valueTwenty) / valueFifty &&
        twentiesArray.length >=
          (requestedAmount - fiftiesArray.length * valueFifty) / valueTwenty &&
        requestedAmount - twentiesArray.length * valueTwenty > 0 && requestedAmount % valueTwenty !==0
      ) {
        requestedArray.push(valueFifty);
        requestedAmount -= valueFifty;
        fiftiesArray.pop();
        // console.log(requestedAmount);
        // console.log(fiftiesArray.length);
        // console.log(twentiesArray.length);
      } else if (twentiesArray.length >= requestedAmount / valueTwenty) {
        requestedArray.push(valueTwenty);
        requestedAmount -= valueTwenty;
        twentiesArray.pop();
        // console.log(requestedAmount);
        // console.log(fiftiesArray.length);
        // console.log(twentiesArray.length);
      } else {
        message = 'This ATM cannot distribute any cash right now.';
        console.log(message);
        return message;
        // alert('Not enough banknotes of 20, try amount divisible by 50');
      }
    }
  }
  console.log('Banknotes withdrawn = ', requestedArray);
  console.log('Banknotes of 20 remaining = ', twentiesArray.length);
  console.log('Banknotes of 50 remaining = ', fiftiesArray.length);
  // alert
  return requestedArray;
}

// cashWithdrawal(1500);
// cashWithdrawal(1400);
// cashWithdrawal(1300);
// cashWithdrawal(1040);
cashWithdrawal(60);
// cashWithdrawal(250);
// cashWithdrawal(300);
