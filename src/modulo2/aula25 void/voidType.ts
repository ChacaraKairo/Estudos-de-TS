// let var : void;
// let var1 : boolean = var;
// let var2 : any = var;
// let var3 : any[] = var;
// let var4 : string = var;
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);

function OlaMundo(): void {
  console.log('Ola Mundo');
}
const olaMundo2 = (): void => {
  console.log('Ola Mundo');
};

const oláMundo3 = () => {
  console.log('Ola Mundo');
};

console.log(OlaMundo());
OlaMundo();
console.log(olaMundo2());
olaMundo2();
console.log(oláMundo3());
oláMundo3();
