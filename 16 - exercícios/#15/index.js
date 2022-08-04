/**
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo
 */

const pesquisaCarro = (modelo) => {
  switch (modelo) {
    case "hatch":
      console.log("Compra efetuada com sucesso do modelo =", modelo);
      break;
    case "sedan":
      console.log("Tem certeza que não prefere este modelo?");
      break;
    case "motocicletas":
      console.log("Tem certeza que não prefere uma motocicleta?");
      break;
    case "caminhonetes":
      console.log("Tem certeza que não prefere uma caminhonete?");
      break;
    default:
      console.log("Não trabalhamos com este tipo de automóvel aqui..");
  }
};

pesquisaCarro("hatch");
