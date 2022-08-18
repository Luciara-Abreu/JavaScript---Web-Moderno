const sequencia = {
  _valor: 1, // Convenção; Essa variável é pretendível que seja acessada apenas internamente
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor);
console.log(sequencia.valor, sequencia.valor);
console.log(sequencia.valor, sequencia.valor);
console.log(sequencia.valor, sequencia.valor);
console.log(sequencia.valor, sequencia.valor);
