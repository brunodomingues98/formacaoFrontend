console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15
const estaAcompanhada = true
const temPassageComprada = true

console.log("Destinos possíveis:")
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de Idade e nao posso vender")
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!")
    listaDeDestinos.splice(2, 1); // removendo item
} else {
    console.log("Não é maior de Idade e nao posso vender")
}
console.log("Embarque:")
if (idadeComprador >= 18 && temPassageComprada) {
    console.log("Boa viagem")
} else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador == 18)
