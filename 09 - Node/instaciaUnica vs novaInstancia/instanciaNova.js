// uma facture retorna uma nova instancia ou um novo objeto

module.exports = ()=> {
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }
}