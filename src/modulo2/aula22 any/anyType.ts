const a: any = '1';
const b: any = 2;
const c: any = 3;
const n: any = 'Kairo';

const result = a + b + c;
console.log(result);
const result2 = a + b + c + n;
console.log(result2);
const result3 = b + c;
console.log(result3);

const formulario: {
  [campoFormulario: string]: any;
} = {
  nome: 'Kairo',
  sobrenome: 'Chacara',
  idade: 34,
};
