let valorVariavel: unknown;
valorVariavel = 1;
valorVariavel = 'Kairo';
valorVariavel = true;
console.log(valorVariavel);
// let valor: unknown;
// let valor1: boolean = valor;
// let valor2: any = valor;
// let valor3: any[] = valor;
// let valor4: string = valor;
// console.log(valor1);
// console.log(valor2);
// console.log(valor3);
// console.log(valor4);
let algumacoisaAny: any;
let algumacoisaUnknown: unknown;
console.log('isto é :' + algumacoisaAny.toFixed('olá'));
console.log(
  'isto é :' +
    algumacoisaUnknown +
    ' mas é ' +
    typeof algumacoisaUnknown,
);
