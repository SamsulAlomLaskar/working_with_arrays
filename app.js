// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, 2, 3], [4, 5, 6, [9, 10, [11, 12]]], 7, 8];
console.log(arrDeep.flat(3));

let arr1 = ["a", "b", "c", "d", "e"];

//? Slice returns new Array, doesn't mutate the original array
console.log(arr1.slice(2, 4));

//? Splice mutate the original array, the extracted part gets deleted from the original array
console.log(arr1.splice(2, 4));

//? Reverse, mutates the original array

arr1 = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2, "Before reverse");
console.log(arr2.reverse());
// console.log(arr2, "after reverse");

//? Concat, doesn't mutate the original array

const letters = arr.concat(arr2);
console.log(letters);

//? At

// const arr3 = [11, 23, 45];
// console.log(arr3.at(0));

// console.log(arr3.at(-1));
// console.log("samsul".at(2));

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

//? flatMap combines the flat & Map method together

const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2, "AB");

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You Withdrew ${Math.abs(movement)}`);
  }
}

console.log("==========================");

//? Continue & break statement do not work in forEach // forEach methods creates side effects, because it prints the elements in each iteration in the console

movements.forEach((movement, index, arr) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You Withdrew ${Math.abs(movement)}`);
  }
});

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, index) => {
  console.log(index, "Index", value, "Value");
});

const uniqueCurrencies = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(uniqueCurrencies);

//?set doesn't have key
uniqueCurrencies.forEach((value, index) => {
  console.log(index, "Index", value, "Value");
});

//? Map creates a new array based on the original array, it doesn't creates side effects because it pushs the new value in the new array & once the iteration is completed it returns the new array

const euroToUsd = 1.1;
const convertedUsd = movements.map((values) => values * euroToUsd);

console.log(convertedUsd);

//? Filter -

const deposits = movements.filter((items) => items > 0);
console.log(deposits);

const withdrawals = movements.filter((items) => items < 0);
console.log(withdrawals);

//? Reduce

const totalBalance = movements.reduce(
  (accum, curr, ind, arr) => accum + curr,
  0
);
/* 
* const totalBalance = movements.reduce((accum, curr, ind, arr) => {
? console.log(`Iteration ${ind}: previous ${accum} & current ${curr}`);
!  return accum + curr;
}, 0); */
console.log(totalBalance);

let balance = 0;
for (const mov of movements) balance += mov;
console.log(balance);

//? finding maximum value

const getMax = movements.reduce((acc, curr) => {
  console.log("previous ACC", acc, "current CURR", curr);
  if (acc > curr) {
    console.log(acc, "ACC");
    return acc;
  } else {
    console.log("Curr");
    return curr;
  }
}, movements[0]);
console.log(getMax, "MAX");

//? Chaining Methods

const totalDepositsInUsd = movements
  .filter((mov) => mov > 0)
  // .map((mov) => mov * euroToUsd)
  .map((mov, ind, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUsd);

//? Find - returns the first elements of the array that satifies the condition

//* Filter returns all the elements that matchs the condition while find methods returns only the first one

//! filter method returns the new array while the find returns only the element not an array

const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account, "FIND");

//? findIndex - we can perform validations as it takes a CB function while indexOf only takes an element & return true false

//? Some - we can perform validations as it takes a CB function while includes only takes an element & return true false

//* Equality

console.log(movements.includes(-130));

//* Condition

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

//? Every - same as some but it returns true if all the elements satisfies the condition

console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

//? Separate CB
let deposit = (mov) => mov > 0;
console.log(account4.movements.every(deposit));

//? Sorting - it mutates the original array (it sorts elements based on the strings)

const owners = ["Samsul", "Adam", "Malina"];
console.log(owners.sort());

// console.log(movements.sort());

movements.sort((a, b) => b - a);
console.log(movements);
