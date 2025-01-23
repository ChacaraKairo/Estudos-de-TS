enum Idioma {
  Portuguese,
  English,
  Spanish,
  French,
}
//Enum numerico - usar o maximo possivel o numerico
console.log(Idioma);

enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}
//Enum string
console.log(Dia);

const enum Comida {
  Fruta,
  Verdura,
  Legume,
  Hamburguer,
  Pizza,
  Churrasco,
}
function comida(c: Comida) {
  return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
console.log(comida(5));

enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Tarefa Concluida!');
