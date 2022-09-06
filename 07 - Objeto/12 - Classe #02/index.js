console.log("------------------------------------------------");
console.log("");

class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor'){
    super(sobrenome)
    this.sobrenome = sobrenome
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor(){
    super('Abreu')
  }
}

const filho = new Filho()
console.log(filho)