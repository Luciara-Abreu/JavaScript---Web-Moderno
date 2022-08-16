function Pessoa() {
  this.age = 0;

  const self = this;
  setInterval(
    function () {
      // this.age++; substituindo o this pelo self
      self.age++;
      // console.log(this.age); substituindo o this pelo self
      console.log(self.age);
    } /*.bind(this)*/, // ou usando aqui o BIND
    1000
  );
}

new Pessoa();
