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

const arr3 = [11, 23, 45];
console.log(arr3.at(0));

console.log(arr3.at(-1));
console.log("samsul".at(2));

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

//? Continue & break statement do not work in forEach

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
