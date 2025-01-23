// contador de dias

const feriado: number = 18;

for (let dia: number = 1; dia <= feriado; dia++) {
  if (dia < feriado) {
    console.log(`Hoje é dia ${dia}`);
  } else if (dia == feriado) {
    console.log(`Hoje é dia ${dia} de feriado`);
  }
}

let dias: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];

for (const dia of dias) {
  if (dia < feriado) {
    console.log(`Hoje é dia ${dia}`);
  } else if (dia == feriado) {
    console.log(`Hoje é dia ${dia} de feriado`);
  } else if (dia > feriado) {
    console.log(`Hoje é dia ${dia}`);
  }
}

// forof cria uma variavel que vai receber os valores do array
// e depois eu posso usar essa variavel para percorrer o array

//forin

const pessoa = {
  nome: 'Kairo',
  idade: 24,
  funcao: 'Developer',
};
const pessoa1: { [key: string]: string | number } = {
  nome: 'Kairo Chácara',
  idade: 244,
  funcao: 'Developer full stack',
};
for (const chave in pessoa1) {
  console.log(chave, pessoa1[chave]);
}

for (const chave in pessoa) {
  console.log(chave, pessoa[chave as keyof typeof pessoa]);
}
for (const key in pessoa) {
  if (Object.prototype.hasOwnProperty.call(pessoa, key)) {
    const element = pessoa[key as keyof typeof pessoa];
    console.log(`Este é com forin ${element}`);
  }
}

Object.keys(pessoa).forEach((chave) => {
  console.log(chave, pessoa[chave as keyof typeof pessoa]);
});

// sort() - organiza o array em oredem crescente, tanto numérico quanto alfabético

const ordemNumerica: Array<number> = [
  8, 6, 5, 4, 2, 3, 6, 4, 7, 8, 9, 4, 1, 2, 3, 2, 8, 3, 5,
  4, 6, 3, 6, 1, 2,
];

console.log(ordemNumerica.sort());
