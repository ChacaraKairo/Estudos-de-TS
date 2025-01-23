export {};

const numeroMax: number = 100;
let contador: number = 100;

if (contador < numeroMax) {
  contador++;
}

//ternário
// condição ? se verdadeiro : se falso

import * as readline from 'readline';

const validadorSaude = (
  peso: number,
  altura: number,
): string => {
  const imc = peso / (altura * altura);

  return imc < 18.5
    ? 'Abaixo do peso'
    : imc < 25
    ? 'Peso normal'
    : imc < 30
    ? 'Acima do peso'
    : 'Obesidade';
};

console.log(validadorSaude(80, 1.8));
