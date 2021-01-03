// const names: Array<string> = []; //string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

// extendsキーワードを用いて制約を設けることができる
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//上記の構文の意味：Tはどんな構造のobjectでも問題ないが、objectでなければならない
//柔軟な制約をつけることが可能で独自の型でも問題ない

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
