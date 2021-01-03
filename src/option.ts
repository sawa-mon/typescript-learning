// Code goes here

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number; //TSにこの関数を両方 number の引数で呼び出した場合、numberを返すことを伝える
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
// １行目の関数宣言を２行目の関数宣言にマージしている(引数の数も変えることができるが、その場合は関数本体のパラメータをオプショナルにする必要がある'(b?: string))=どちらの型も使える
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Hello", "TypeScript");
result.split(" ");

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInnfomation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges:" + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date:" + emp.startDate);
//   }
// }

// printEmployeeInnfomation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("運転中...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("トラックを運転中...");
//   }

//   loadCargo(amount: number) {
//     console.log("荷物を載せています..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // if ("loadCargo" in vehicle) { instanceof を使用しない型ガードの書き方
//   if (vehicle instanceof Truck) {
//     //instannceof を使用した書き方
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// //TypeGiardの特別な機能
// // Descriminated Unions 判別されるUnion型(Objectの時に便利)

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log(`移動速度:${speed}km/hです`);
// }

// moveAnimal({ type: "bird", flyingSpeed: 230 });

// // TypeCasting(型キャスト)ある特定の型であることが明確に推論できない場合にTSに伝える為に使用される型になる
// // わかりやすい例はDOMアクセス

// // 手法１
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // !は前の式が絶対にnullでないということを示す
// const userInputElement = document.getElementById("user-input");
// // !as HTMLInputElement;

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "こんにちは";
// }

// //インデックス型
// //Index Types
// //Index Signatures
// // Objectを作る時にプロパティを柔軟に定義するために使える

// interface ErrorContainer {
//   // {email: '正しいメールアドレスではありません', username: ユーザー名に記号を含めることはできません}などのエラーメッセージ
//   [prop: string]: string;
// }

// const errorBag:ErrorContainer  = {
//   email: 'aaaaa',
//   username: 'bbbbb'
// };

// //関数オーバーロード (functionOverLoad)
// //一つの関数にたいして複数の関数のシグネチャーを指定できる

// ブレーク 便利機能
//Optional Chaining(オプショナルチェーン)
//バックエンドからユーザーのマスターデータなどをオブジェクトなどで取得した場合
//そのデータが取得できるかどうかが不明確な場合に?を使用して取得時に取得していたら次の処理に行くという書き方ができる
const fetchedUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developper",
    description: "TypeScript",
  },
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing Operator (null合体演算子) ??と記述
// このタイミングでなにかの入力データを持っていてnullなのかundefaindなのか正しい中身があるかわからない場合

// const userInput = "";
const userInput = undefined;

// const storedData= userInput || 'DEFAULT' //1つめの値がfalsyだった場合右側の参照(空文字の場合もfalseとして扱われるので右辺が参照される)
const storedData = userInput ?? "DEFAULT"; //1つめの値が空文字や数値の"０"であった場合、左辺はfalseとして扱われない)

console.log(storedData);
