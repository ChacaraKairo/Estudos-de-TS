//String
let nome: string = "Kairo Chácara";
console.log(nome);
let frase: string = `Olá meu nome é  ${nome}`;
console.log("frase :", frase);

//array
let animais: string[] = ["Cachorro", "Gato", "Papagaio"];
console.log(animais);

//object
let carro: {
  marca: string;
  modelo: string;
  ano: number;
};

let meuCarro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
};
console.log(meuCarro);

//function {Type Anootation}
function multiplicarNumeros(
  num1: number,
  num2: number,
): number {
  return num1 * num2;
}
console.log(multiplicarNumeros(2, 3));
function somaNumeros(num1: number, num2: number) {
  return num1 + num2;
}

console.log(somaNumeros(2, 3));
