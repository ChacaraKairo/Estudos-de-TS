// Generics
function retornaElemento<T>(elemento: T): T {
  return elemento;
}
console.log(retornaElemento<string>("Teste"));
console.log(retornaElemento<number>(123));
