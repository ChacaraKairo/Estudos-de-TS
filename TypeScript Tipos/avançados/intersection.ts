// Intersection
interface Pessoa {
  nome: string;
}
interface Funcionario {
  salario: number;
}
const trabalhador: Pessoa & Funcionario = {
  nome: "Carlos",
  salario: 3000,
};
console.log(trabalhador);
