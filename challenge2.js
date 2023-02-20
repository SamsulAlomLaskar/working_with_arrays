function calcAverageHumanAge(dogsAge) {
  let humanAge = dogsAge.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adultDogs = humanAge.filter((age) => age >= 18);
  //   const avg = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  const avg = adultDogs.reduce(
    (acc, age, ind, arr) => acc + age / arr.length,
    0
  );

  console.log(humanAge);

  console.log(adultDogs);

  return avg;
  //   console.log(dogsAbove18);
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
