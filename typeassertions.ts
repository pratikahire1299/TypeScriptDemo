let message;
message ='abc';
let num=10.5;

let temp = (<string>message).length; // not change type just show type of variable
let temp2 =  (num as Number).toFixed();

console.log(temp);
console.log(temp2);