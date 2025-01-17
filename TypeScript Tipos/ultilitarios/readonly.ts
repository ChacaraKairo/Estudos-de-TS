// Readonly
interface Livro {
  readonly titulo: string;
  autor: string;
}
const meuLivro: Livro = {
  titulo: "1984",
  autor: "George Orwell",
};
// meuLivro.titulo = "Novo Título"; // Erro
console.log(meuLivro);
