function rand([min = 0, max = 1000]) {
  //se for maior vai inverter os valores
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50, 54]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
