// Throw Exception
function error(message: string): never {
  throw new Error(message);
}
console.log(error('Error de Mensagem - 01'));
//Never inferido automaticamente

function rejeitar() {
  return error('Error de Mensagem - 02');
}
console.log(rejeitar());

//funcção com loop infinito retorna o tipo 'never'

function loopInfinito1() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('Oi, Developers!');
  }
}
//console.log(loopInfinito())

//diferença entre never e void

const algumaCoisaVoid: void = null;

const algumaCoisaNever: never = null;

// console.log(algumaCoisaVoid);
// console.log(algumaCoisaNever);
