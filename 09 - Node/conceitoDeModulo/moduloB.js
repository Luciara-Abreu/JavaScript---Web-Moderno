console.log("------------------------------------------------");
console.log("Formas de exportar módulos no node");
console.log("Modulo B");

module.exports = {
  bomDia: "Bom dia",
  boaNoite() {
    return "Boa noite Pessoal!";
  },
};
