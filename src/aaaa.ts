let userInputed: unknown;
let userName: string;

userInputed = 5;
userInputed = "Max";

if (typeof userInputed === "string") {
  userName = userInputed;
}

// function generateError(message: string, code: number): never {
//   throw { message: message, erroeCod: code };
// }

// const result = generateError("エラーが発生しました", 500);
// console.log(result);

//レストパラメータ構文
// const add = (...numbers: [number, number, number]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addedNumbers = add(5, 10, 2, 3.7);

// console.log(addedNumbers);

//分割代入
const hobbies = ["Sports", "Cooking"];
const actioveHobbies = ["Hiking", ...hobbies];

actioveHobbies.push(...hobbies);

const persons = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = {
  ...persons,
};

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userNames, age } = persons;

console.log(userNames, age, persons);
