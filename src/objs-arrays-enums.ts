// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //Tuple型
// } = {
//   name: "ryota",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], //master情報を設定すると仮定する(役割を定義したmasterという認識)
// };

// person.role.push("admin");
// person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "ryota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role = [0, 'adimin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザ");
}
