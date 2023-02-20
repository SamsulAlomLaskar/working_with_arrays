// const juliasDogs = [3, 5, 2, 12, 7];
// const katesDogs = [10, 5, 6, 1, 4];
// const juliasDogs = [3, 5, 2, 12, 7];
// const katesDogs = [10, 5, 6, 1, 4];

function checkDogs(julia, kate) {
  const finalDogsJulia = julia.splice(1, julia.length - 3);
  const combinedDogs = finalDogsJulia.concat(kate);
  combinedDogs.forEach((dogs, num) => {
    console.log(
      `${
        dogs < 3
          ? `Dog number ${num + 1} is still a puppy 🐶`
          : `Dog number ${
              num + 1
            } is and is and an adult, and is ${dogs} years old`
      }`
    );
    // console.log(
    //   `Dog number ${num + 1} is ${isAdult}, and is ${dogs} years old`
    // );
  });
  console.log(finalDogsJulia);
  console.log(combinedDogs);
}
checkDogs([3, 5, 2, 12, 7], [10, 5, 6, 1, 4]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
