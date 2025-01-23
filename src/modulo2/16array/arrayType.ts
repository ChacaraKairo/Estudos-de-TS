// 1 - Array com uso de colchetes

let emojis: string[] = [
  '🍎',
  '🍏',
  '🍐',
  '🍊',
  '🍋',
  '🍌',
  '🍉',
  '🍇',
  '🍓',
  '🫐',
  '🍈',
  '🍒',
  '🍑',
  '🥭',
  '🍍',
  '🥝',
  '🍅',
  '🫒',
];
console.log(emojis);

for (let i = 0; i < emojis.length; i++) {
  if (i % 2 === 0) {
    console.log('\n', emojis[i]);
  } else {
    console.log('\n Fruta estragada');
  }
}

// 2 - Array object

let frutas: Array<string> = [
  '🍎',
  '🍏',
  '🍐',
  '🍊',
  '🍋',
  '🍌',
  '🍉',
  '🍇',
  '🍓',
  '🫐',
  '🍈',
  '🍒',
  '🍑',
  '🥭',
  '🍍',
  '🥝',
  '🍅',
  '🫒',
];
console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
  if (i % 2 === 0) {
    console.log('\n', frutas[i]);
  } else {
    console.log('\n Fruta estragada');
  }
}

// 3 - Array com metodo push

let frutas2: string[] = [];

frutas2.push('🍎');
frutas2.push('🍏');
frutas2.push('🍐');
frutas2.push('🍊');
console.log(frutas2);

// Array puxar o tamanho do array
// Metodo length
console.log(frutas2.length);

//Array com Spread Operator

let numereos: Array<number> = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

let numereos2 = [
  ...numereos,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];
console.log(numereos2);

//Array laço de iteração

for (let i = 0; i < numereos2.length; i++) {
  if (i % 2 === 0) {
    console.log('\n', numereos2[i]);
  } else {
    console.log('\n Fruta estragada');
  }
}

//Array laço de iteração com forEach

numereos2.forEach((num) => {
  if (num % 2 === 0) {
    console.log('\n', num);
  } else {
    console.log('\n Fruta estragada');
  }
});

//Array laço de iteração com for of

for (let num of numereos2) {
  if (num % 2 === 0) {
    console.log('\n', num);
  } else {
    console.log('\n Fruta estragada');
  }
}
