// Never
function erro(mensagem: string): never {
  throw new Error(mensagem);
}
// erro("Erro crítico!");
