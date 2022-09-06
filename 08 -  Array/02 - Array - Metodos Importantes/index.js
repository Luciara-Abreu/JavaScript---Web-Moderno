console.log("------------------------------------------------");
console.log("Arrays: Metodos importantes ");

const pilotos = ["Vetel", "Alonso", "Raikonon", "Massa"];
console.log("------------------------------------------------");

console.log("pop remove o ultimo elemento da lista ");
pilotos.pop();
console.log(pilotos);

console.log("------------------------------------------------");
console.log("pop remove o primeiro elemento da lista ");
pilotos.shift();
console.log(pilotos);

console.log("------------------------------------------------");
console.log("Add um novo elemento na ultima posição");

pilotos.push("Luci");
console.log(pilotos);

console.log("------------------------------------------------");
console.log("Add um novo elemento na primeira posição");

pilotos.unshift("Lucas");
console.log(pilotos);

console.log("------------------------------------------------");
console.log("Splice pode tanto add como remover");

console.log("Add sem remover");
pilotos.splice(4, 1, "Vetel", "Massa", "Eder");
console.log(pilotos);

console.log("------------------------------------------------");
console.log("Apenas remover");
pilotos.splice(5, 1); //removi o indice 5
console.log(pilotos);

console.log("------------------------------------------------");
console.log("Metodo que retorna um novo array - slice");
console.log(
  "slice - pega uma parte do array a partir do indice passado no argumento"
);

const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

console.log("------------------------------------------------");
console.log("Seleciona uma parte do array com inicio e fim");

const algunsPilotos2 = pilotos.slice(3, 6);
console.log(algunsPilotos2);
