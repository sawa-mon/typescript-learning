"use strict";
function added(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = added;
console.log(combineValues(8, 8));
printResult(added(5, 12));
function sendRequest(data, cb) {
    console.log(cb);
    return cb({ data: "Hi there!" });
}
console.log(sendRequest);
sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
});
