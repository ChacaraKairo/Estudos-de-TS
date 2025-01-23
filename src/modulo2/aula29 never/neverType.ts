//never não contem valores
//nao pode ser usado para receber nenhum valor
//é usado em casos de apontamento de erros
//retorno de função que gera um erro
//no caso throw
//sinalizar areas inaucansaveis no código

function error(mensagem: string): never {
  throw new Error(mensagem);
}

console.log(error('Erro de Mensagem'));
