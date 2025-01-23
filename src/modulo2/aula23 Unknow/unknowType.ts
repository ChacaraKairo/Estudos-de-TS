//ao invés de usar any, usar unknown

let a: unknown = '1';
let b: unknown = 2;
let c: unknown = 3;
let d: unknown = 'Kairo';
let e: unknown = true;
let f: unknown = [];
let g: unknown = {};

let mostrar: unknown = () => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
};
console.log(mostrar());
