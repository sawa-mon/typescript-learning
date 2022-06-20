// // const names: Array<string> = []; //string[]
// // // names[0].split(' ');

// // const promise: Promise<number> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve(10);
// //   }, 1000);
// // });

// // promise.then(data => {
// //   // data.split(' ');
// // })

// // extendsキーワードを用いて制約を設けることができる
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// //上記の構文の意味：Tはどんな構造のobjectでも問題ないが、objectでなければならない
// //柔軟な制約をつけることが可能で独自の型でも問題ない

// const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
// console.log(mergedObj);

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "値がありません。";
//   if (element.length > 0) {
//     descriptionText = "値は" + element.length + "個です。";
//   }
//   return [element, descriptionText];
// }
// console.log(countAndDescribe(["Sports", "Cooking"]));

// //keyofで１つ目のオブジェクトのプロパティであることを制約する
// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value:" + obj[key];
// }

// extractAndConvert({ name: "Max" }, "age");

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Data1");
// textStorage.addItem("Data2");
// textStorage.removeItem("Data1");
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const obj = { name: "Max" };
// objStorage.addItem(obj);
// objStorage.addItem({ name: "Manu" });
// // ...

// objStorage.removeItem(obj);
// console.log(objStorage.getItems());

import { Product } from "./product.model";

const products = [
  { title: "商品１", price: 100 },
  { title: "商品２", price: 200 },
];

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
