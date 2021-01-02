function added(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

let combineValues: (a: number, b: number) => number;

combineValues = added;
// combineValues = printResult;
// combineValues = 5

console.log(combineValues(8, 8));

printResult(added(5, 12));

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  console.log(cb);
  return cb({ data: "Hi there!" });
}
console.log(sendRequest);

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
