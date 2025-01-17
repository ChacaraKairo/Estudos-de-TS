// Keyof e Record
type ChavesPessoa = keyof { nome: string; idade: number }; // "nome" | "idade"
const chave: ChavesPessoa = "nome";
console.log(chave);

const notas: Record<string, number> = {
  Matematica: 90,
  Portugues: 85,
};
console.log(notas);
