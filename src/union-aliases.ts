type Combinabled = number | string;
type ConversionDescriptor = "as-number" | "as-text"; //ユニオン型とリテラル型の組み合わせ
//型エイリアスとしての使用(分割代入みたいなもの)

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return parseFloat(result); //+resultと省略もできる
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
