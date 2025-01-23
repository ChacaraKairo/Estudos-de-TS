//tupla

let tupla: [number, string, boolean] = [1, 'Kairo', true];
console.log(tupla);

let pessoa: [string, number, string];
pessoa = ['Glaucia', 34, 'Cloud Advocate JavaScript'];
console.log(pessoa);
let kairo: [string, number, string];
kairo = ['Kairo', 34, 'Cloud Advocate JavaScript'];
console.log(...kairo);
//tupla com label

let tuplaLabel: [string, ...string[]];
tuplaLabel = [
  'Glaucia',
  'Lemos',
  'Cloud Advocate JavaScript',
];
console.log(...tuplaLabel);
console.log(tuplaLabel[1]);

let tupla3: [nome: string, idade: number, cargo: string];
tupla3 = ['Glaucia', 34, 'Cloud Advocate JavaScript'];

let tupla4: [nome: string, idade: number, cargo: string[]];

//Lista heretogenea de tupla
let listaFrutas: [number, boolean, ...string[]];
listaFrutas = [5, true, '🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

let listaFrutas2: [number, boolean, ...string[]];
listaFrutas2 = [5, true, '🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas2);
let frutas: Array<string> = [
  '🍍',
  '🍊',
  '🍎',
  '🍉',
  '🥭',
  'estas são as frutas',
];
let listaFrutas3: [number, boolean, ...string[]];
listaFrutas3 = [5, true, ...frutas];
console.log(...listaFrutas3);

// tuplas em functions

function listarPessoas(
  nomes: string[],
  idades: number[],
  sexo: string[],
) {
  for (let i = 0; i < nomes.length; i++)
    console.log(nomes[i], idades[i], sexo[i]);
  return [...nomes, ...idades, ...sexo];
}

let resultado = listarPessoas(
  ['Glaucia', 'Kairo'],
  [34, 24],
  ['Feminino', 'Masculino'],
);
console.log(...resultado);

// tupla com Spread operator numa function
type Nome =
  | [primeiroNome: string, segundoNome: string]
  | [
      primeiroNome: string,
      segundoNome: string,
      terceiroNome: string,
    ]
  | [nomes: string[]];

function listarNomes(...nomes: Nome) {
  for (let i = 0; i < nomes.length; i++)
    console.log(nomes[i]);
  return [...nomes];
}

let resultado2 = listarNomes('Glaucia', 'Kairo');
console.log(...resultado2);
