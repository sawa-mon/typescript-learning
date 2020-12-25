"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5
console.log(combineValues(8, 8));
printResult(add(5, 12));
function sendRequest(data, cb) {
    // ... sending a request with "data"
    console.log(cb);
    return cb({ data: "Hi there!" });
}
console.log(sendRequest);
sendRequest("Send this!", function (response) {
    console.log(response);
    return true;
});
