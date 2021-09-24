const array = [
  { id: 1231 },
  { id: 5555 },
  { id: 1111 },
  { id: 2222 },
];


const teste = array.find(({ id }) => id === 1231);

console.log(teste)