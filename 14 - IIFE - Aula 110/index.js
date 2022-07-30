console.log("--/ * IIFE - Função auto invocada. * /--");

(function(){
  console.log("--/ * IIFE será executado na hora- ")
  console.log("Foge do escopo mais abrangente ")
})()