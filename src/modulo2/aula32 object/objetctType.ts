export {};

const pessoa = {
  nome: 'kairo',
  idade: 24,
  funcao: 'Developer',
};
console.log(pessoa);

//object como parametro de funçao

function onborading01(pessoa: object) {
  console.log(pessoa);
}
onborading01(pessoa);

function onborading02(funcionario: { nome: string }) {
  return `Parabens pela promoção ${funcionario.nome}`;
}

console.log(onborading02(pessoa));
console.log(onborading02({ nome: 'Juracemirnolindomar' }));

//object nomeados

interface Pessoa {
  nome: string;
  idade: number;
  funcao: string;
}
function onborading03(pessoa: Pessoa) {
  return `EAE tal de ${pessoa.nome} \nverdade que voce tem ${pessoa.idade} anos \ne trabalha como ${pessoa.funcao}`;
}

console.log(
  onborading03({
    nome: 'Kairo',
    idade: 24,
    funcao: 'Developer',
  }),
);
//Exemploc om type alias

type Funcionario = {
  nome: string;
  idade: number;
  funcao: string;
};

function onborading04(pessoa: Funcionario) {
  return `EAE tal de ${pessoa.nome} \nverdade que voce tem ${pessoa.idade} anos \ne trabalha como ${pessoa.funcao}`;
}
const funcionario: Funcionario = {
  nome: 'juvenal',
  idade: 32,
  funcao: 'Jigolo',
};

console.log(onborading04(funcionario));
console.log(
  onborading04({
    nome: 'Eliots',
    idade: 18,
    funcao: 'Jogador',
  }),
);

//usando optional no object
//o uso do ? faz com que o dado passado seja opcional

interface People {
  nome: string;
  idade?: number;
  funcao: string;
}

function onborading05(pessoa: People) {
  return `EAE tal de ${pessoa.nome} \nverdade que voce tem ${pessoa.idade} anos \ne trabalha como ${pessoa.funcao}`;
}

console.log(
  onborading05({
    nome: 'Kairo',
    funcao: 'Developer',
  }),
);
//Propriedade readonly

interface Funcionario1 {
  readonly id: number; // não permite alteração após ser gravado algo nessa propriedade
  nome: string;
  idade: number;
  funcao: string;
}

const funcionario1: Funcionario1 = {
  id: 1,
  nome: 'Kairo',
  idade: 24,
  funcao: 'Developer',
};

console.log(funcionario1);

function onborading06(pessoa: Funcionario1) {
  return `EAE tal de ${pessoa.nome} \nverdade que voce tem ${pessoa.idade} anos \ne trabalha como ${pessoa.funcao} w o seu id ${pessoa.id}`;
}

// tipos de extensoes/heranças

interface Mae {
  nome: string;
}
interface Pai {
  sobrenome: string;
}
interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: 'Marya',
  sobrenome: 'chácara',
  idade: 2,
};
console.log(filha);

// Tipos de interface

interface Cachorro {
  tipo: string;
  latir(): void;
}

interface Gato {
  tipo: string;
  miar(): void;
}
type Animal = Cachorro & Gato; //interseccao de tipos
const animal: Animal = {
  tipo: 'Cachorro',
  latir() {
    return 'au au au';
  },
  miar() {
    return 'miau miau';
  },
};
console.log(animal.latir());
console.log(animal.miar());
let barulhos = animal.latir();
console.log(barulhos);
barulhos = animal.miar();
console.log(barulhos);

//Generic Objects

type Usuario = {
  nome: string;
  email: string;
};

const kairo: Usuario = {
  nome: 'kairo',
  email: 'algumacoisa@gmail.com',
};

type Admin = {
  nome: string;
  email: string;
  admin: true;
};

function acessarSistema(usuario: Usuario) {
  return usuario;
}
