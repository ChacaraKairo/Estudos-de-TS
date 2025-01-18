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
console.log(frutas2);
