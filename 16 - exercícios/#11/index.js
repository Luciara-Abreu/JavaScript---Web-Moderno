/* calcula ano bissexto
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. 
*/
let anos = ['1990','1991','1992','1993','1994','1995','1996','1997',
'1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
'2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021',
'2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033',
'2034','2035','2036','2037','2038','2039','2040']

function calculAnoBissexto(ano) {
  for (let i = 0; i < anos.length; i++) {
  if (anos[i] % 4 == 0 && anos[i] % 400 == 0) {
    console.log(anos[i], " Ano bissexto")
  } else if (anos[i] % 4 == 0 && anos[i] % 100 !== 0) {
    console.log(anos[i], " Ano bissexto")
  }else {
    console.log(anos[i], "Não é um ano bissexto");
  }
}
}
calculAnoBissexto(`${anos}`); 


