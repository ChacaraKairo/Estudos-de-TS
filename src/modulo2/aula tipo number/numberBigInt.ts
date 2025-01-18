let num1: number = 23.3;
let num2: number = 0xab68;
let num3: number = 0o164;
let num4: number = 0b1010100010010;

console.log("Number - ponto flutuante :", num1);
console.log(typeof num1);
console.log("Number - hexadecimal :", num2);
console.log(typeof num2);
console.log("Number - octal :", num3);
console.log(typeof num3);
console.log("Number - binário :", num4);
console.log(typeof num4);

//bigint

let big1: bigint = 100000000000000000000000000000000n;
let big2: bigint =
  0b1101111001101010001010001001001001010000000000000000000000000000n;
let big3: bigint =
  0o157504252412140220240037614402000000000n;
let big4: bigint = 0x1df54a491400000000000000000000000n;

console.log("Number - bigint :", big1);
console.log(typeof big1);
console.log("Number - binary :", big2);
console.log(typeof big2);
console.log("Number - octal :", big3);
console.log(typeof big3);
console.log("Number - hexadecimal :", big4);
console.log(typeof big4);
