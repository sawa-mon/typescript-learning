// type AddFn = (a: number, b: number) => number; function型 カスタム型の代わりにinterfaceを使用可能
interface AddFn {
  (a: number, b: number): number;
}

let added2: AddFn;

added2 = (n1: number, n2: number) => {
  return n1 + n2;
};

//interface => objectの構造を定義するために使用
//関数に構造を定義することにも使える(function型の代わりに使用可) ↑
interface Named {
  // readonly name?: string; ?をつけることで、interfaceを実装しているクラスのプロパティがあってもなくてもどちらでも良いということを認識させることができるが
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

//既に宣言したオブジェクト構造に従わなければならないクラスを使いたい場合、互換性を保証するためにimplementsキーワードを使う
class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + "" + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hello I am");
