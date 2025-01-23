function logError(errorMensage: String) {
  console.log(errorMensage);
}
logError('Algo deu errado');

function logError2(errorMensage: String): void {
  console.log(errorMensage);
}
logError2('Algo deu errado denovo');

const logError3 = (errorMensage: String) => {
  console.log(errorMensage);
};
logError3('Algo deu errado denovo denovo');

const logError4 = (errorMensage: String): void => {
  console.log(errorMensage);
};
logError4('Algo deu errado denovo denovo denovo');

let variavel: void;

// variavel = 1;
variavel = null;
variavel = undefined;
console.log(variavel);
