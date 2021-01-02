"use strict";
let userInputed;
let userName;
userInputed = 5;
userInputed = "Max";
if (typeof userInputed === "string") {
    userName = userInputed;
}
const hobbies = ["Sports", "Cooking"];
const actioveHobbies = ["Hiking", ...hobbies];
actioveHobbies.push(...hobbies);
const persons = {
    firstName: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, persons);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userNames, age } = persons;
console.log(userNames, age, persons);
